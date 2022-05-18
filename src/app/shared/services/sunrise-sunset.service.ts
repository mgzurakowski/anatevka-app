import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { SunriseSunsetData, SunriseSunsetDataHttpResponse } from 'src/app/shared/models/sunrise-sunset.model';
import { TimeHelperService } from 'src/app/shared/services/time-helper.service';

@Injectable({
  providedIn: 'root'
})
export class SunriseSunsetService {
  constructor(private httpClient: HttpClient, private timeHelper: TimeHelperService) {}

  /**
   * @param lat latitude in decimal degrees
   * @param lng longitude in decimal degrees
   * @param date date in YYYY-MM-DD format
   * @param formatTime if true time values in response will be expressed following ISO 8601 and day_length will be expressed in seconds
   */
  getSunriseSunsetData$(
    lat: string,
    lng: string,
    date: Date,
    formatTime: boolean = false
  ): Observable<SunriseSunsetData> {
    const url = `https://api.sunrise-sunset.org/json`;
    const params = new HttpParams().appendAll({
      lat: lat,
      lng: lng,
      date: this.timeHelper.formatDateForSunriseSunsetApi(date),
      formatted: formatTime ? 1 : 0,
    });
    const options = {
      params: params,
    };

    return this.httpClient
      .get<SunriseSunsetDataHttpResponse>(url, options)
      .pipe(
        tap((response) => {
          if (response.status !== 'OK') {
            throw response;
          }
        }),
        map((response) => response.results)
      );
  }
}
