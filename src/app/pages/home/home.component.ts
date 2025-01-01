import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { DateService } from 'src/app/services/date.service';
import {
  PrayerTimes,
  PrayerTimesService,
} from 'src/app/services/prayer-times.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  private readonly http = inject(HttpClient);
  private readonly prayerTimesService = inject(PrayerTimesService);
  private readonly dateService = inject(DateService);
  public prayerTimes: PrayerTimes | null = null;

  ngOnInit(): void {
    this.fetchPrayerTimes(this.dateService.getTodayDateString());
  }

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
