import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { catchError, Observable, of, switchMap } from 'rxjs';
import { TodayService } from 'src/app/features/days/today/services/today.service';
import { SunriseSunsetData } from 'src/app/shared/models/sunrise-sunset.model';
import { TimeHelperService } from 'src/app/shared/services/time-helper.service';

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
    private router: Router,
    private timeHelper: TimeHelperService,
  ) { }

  ngOnInit(): void {
    this.cityName$ = this.timeHelper.refreshEachQuarterOfHour$().pipe(
      switchMap((_) =>
        this.todayService.getCityName$().pipe(
          catchError((error) => {
            this.router.navigate(['/error', 'geolocation']);
            return of(error);
          })
        )
      )
    );

    this.sunriseSunsetInfo$ = this.timeHelper.refreshEachQuarterOfHour$().pipe(
      switchMap((_) => this.todayService
        .getTodaySunriseSunsetInfo$()
      )
    );

    this.timeHelper.refreshEachQuarterOfHour$();
  }

}
