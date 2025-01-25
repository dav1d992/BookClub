import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PrayerTimesService {
  private apiUrl = 'https://api.aladhan.com/v1/timings';

  constructor(private http: HttpClient) {}

  public getPrayerTimes(date: string) {
    const params = new HttpParams()
      .set('latitude', '56.156700')
      .set('longitude', '10.210800')
      .set('method', '7')
      .set('date', date);

    return this.http.get<any>(`${this.apiUrl}/${date}`, { params }).pipe(
      map((response) => {
        return <PrayerTimes>{
          fajr: response.data.timings.Fajr,
          sunrise: response.data.timings.Sunrise,
          dhuhr: response.data.timings.Dhuhr,
          sunset: response.data.timings.Sunset,
          maghrib: response.data.timings.Maghrib,
          calculationsFrom: response.data.meta.method.name,
        };
      })
    );
  }
}

export interface PrayerTimes {
  fajr: string;
  sunrise: string;
  dhuhr: string;
  sunset: string;
  maghrib: string;
  calculationsFrom: string;
}
