import { Injectable } from '@angular/core';
import { flatMap, forkJoin, map, Observable, of, switchMap, toArray, zip } from 'rxjs';
import { SunriseSunsetData } from 'src/app/shared/models/sunrise-sunset.model';
import { GeocodingService } from 'src/app/shared/services/geocoding.service';
import { GeolocationService } from 'src/app/shared/services/geolocation.service';
import { SunriseSunsetService } from 'src/app/shared/services/sunrise-sunset.service';
import { TimeHelperService } from 'src/app/shared/services/time-helper.service';

@Injectable()
export class DaysListService {

  constructor(private timeHelper: TimeHelperService, private geolocationService: GeolocationService, private sunriseSunsetService: SunriseSunsetService) { }

  getDatesList(): string[] {
    const todayDate = new Date();
    const yesterdayDate = this.timeHelper.getRelativeDate(todayDate, -1);
    const tomorrowDate = this.timeHelper.getRelativeDate(todayDate, 1);

    // dates formatted specifically for SunriseSunset API
    const todayDateFormatted = this.timeHelper.formatDateForSunriseSunsetApi(todayDate);
    const yesterdayDateFormatted = this.timeHelper.formatDateForSunriseSunsetApi(yesterdayDate);
    const tomorrowDateFormatted = this.timeHelper.formatDateForSunriseSunsetApi(tomorrowDate);

    const datesToGet: string[] = [
      yesterdayDateFormatted,
      todayDateFormatted,
      tomorrowDateFormatted
    ].filter((date) => typeof date === 'string') as string[];

    return datesToGet;
  }

  getSunriseSunsetItems$() {
    const datesList = this.getDatesList();

    return this.geolocationService.getCurrentLocation$().pipe(
      switchMap((location) => {
        const lat = '' + location.latitude;
        const lng = '' + location.longitude;

        return zip(datesList.map((date) => this.sunriseSunsetService.getSunriseSunsetData$(lat, lng, new Date(date))))
      }),
    );
  }
}
