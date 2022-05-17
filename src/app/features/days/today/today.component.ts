import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { catchError, Observable, of } from 'rxjs';
import { TodayService } from 'src/app/features/days/today/services/today.service';
import { SunriseSunsetData } from 'src/app/shared/models/sunrise-sunset.model';

@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.scss'],
  providers: [TodayService]
})
export class TodayComponent implements OnInit {

  cityName$!: Observable<string>;
  sunriseSunsetInfo$!: Observable<SunriseSunsetData>;

  readonly iconSun = faSun;
  readonly iconMoon = faMoon;

  readonly sunriseSunsetHourFormat = 'H:mm';

  constructor(
    private todayService: TodayService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.cityName$ = this.todayService.getCityName$().pipe(
      catchError((error) => {
        this.router.navigate(['/error', 'geolocation']);
        return of(error);
      })
    );

    this.sunriseSunsetInfo$ = this.todayService
    .getTodaySunriseSunsetInfo$()
    .pipe(
      catchError((error) => {
        this.router.navigate(['/error', 'geolocation']);
        return of(error);
      })
    );
  }

}
