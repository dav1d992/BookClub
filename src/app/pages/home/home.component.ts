import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import {
  Component,
  computed,
  inject,
  signal,
  type OnInit,
} from '@angular/core';
import { DateService } from 'src/app/services/date.service';
import {
  type PrayerTimes,
  PrayerTimesService,
} from 'src/app/services/prayer-times.service';
import { Meeting } from 'src/models/meeting';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [DatePipe],
  standalone: true,
})
export class HomeComponent implements OnInit {
  private readonly http = inject(HttpClient);
  private readonly prayerTimesService = inject(PrayerTimesService);
  private readonly dateService = inject(DateService);
  public prayerTimes: PrayerTimes | null = null;

  public meetings = signal<Meeting[]>([
    {
      date: '2026-01-04',
      topic: 'Kitab al-Ghayba side ~278-295',
      place: 'Engmarken 6, 8220 Brabrand',
      day: 'Søndag',
      time: '17:00',
    },
    {
      date: '2026-01-11',
      topic: 'Kitab al-Ghayba side ~295-315',
      place: 'Engmarken 6, 8220 Brabrand',
      day: 'Søndag',
      time: '17:00',
    },
  ]);

  ngOnInit(): void {
    this.fetchPrayerTimes(this.dateService.getTodayDateString());
  }

  public futureMeetings = computed(() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    return this.meetings().filter((meeting) => {
      const meetingDate = new Date(meeting.date);
      meetingDate.setHours(0, 0, 0, 0);
      return meetingDate >= today;
    });
  });

  public fetchPrayerTimes(date: string): void {
    this.prayerTimesService.getPrayerTimes(date).subscribe(
      (response) => {
        this.prayerTimes = response;
      },
      (error) => {
        console.error('Error fetching prayer times:', error);
      }
    );
  }

  public downloadPdf(filename: string): void {
    const fileUrl = `assets/${filename}`;
    this.http.get(fileUrl, { responseType: 'blob' }).subscribe(
      (response: Blob) => {
        const url = window.URL.createObjectURL(response);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        a.click();
        window.URL.revokeObjectURL(url);
      },
      (error) => {
        console.error('Error downloading the file', error);
      }
    );
  }
}
