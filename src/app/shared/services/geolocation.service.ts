import { Inject, Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { NAVIGATOR } from 'src/app/core/tokens/navigator';

@Injectable({
  providedIn: 'root'
})
export class GeolocationService {
  // private window: Window;

  constructor(@Inject(NAVIGATOR) private navigator: Navigator) { }

  getCurrentLocation$() {
    return new Observable<GeolocationCoordinates>((observer) => {
      this.navigator.geolocation.getCurrentPosition(
        (position) => {
          observer.next(position.coords);
          observer.complete();
        },
        (err) => observer.error(err)
      );
    }).pipe(
      tap((location) => {
        const lat = location?.latitude;
        const lng = location?.longitude;

        if (typeof lat === 'undefined' || typeof lng === 'undefined') {
          throw location;
        }
      })
    );
  }
}
