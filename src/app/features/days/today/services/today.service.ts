import { Injectable } from '@angular/core';
import { map, switchMap } from 'rxjs';
import { GeocodingService } from 'src/app/shared/services/geocoding.service';
import { GeolocationService } from 'src/app/shared/services/geolocation.service';

@Injectable()
export class TodayService {
  constructor(
    private geolocationService: GeolocationService,
    private geocodingService: GeocodingService,
  ) {}

  getCityName$() {
    const cityName$ = this.geolocationService.getCurrentLocation$().pipe(
      switchMap((location) => {
        const lat = '' + location?.latitude;
        const lng = '' + location?.longitude;

        return this.geocodingService.getCityFromCoordinates$(lat, lng).pipe();
      }),
      map((cityData) => cityData[0].name)
    );
    return cityName$;
  }
}
