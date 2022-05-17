import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OpenWeatherCity } from 'src/app/shared/models/open-weather.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GeocodingService {
  constructor(private httpClient: HttpClient) {}

  /**
   * @param lat latitude in decimal degrees
   * @param lng longitude in decimal degrees
   * @param limit number of variations to return
   */
  getCityFromCoordinates$(lat: string, lng: string, limit: number = 1) {
    const url = `http://api.openweathermap.org/geo/1.0/reverse`;
    const params = new HttpParams().appendAll({
      lat: lat,
      lon: lng,
      limit: limit,
      appid: environment.openWeatherMapApiKey,
    });
    const options = {
      params: params,
    };

    return this.httpClient.get<OpenWeatherCity[]>(url, options);
  }
}
