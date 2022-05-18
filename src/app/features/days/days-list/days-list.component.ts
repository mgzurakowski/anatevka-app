import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { DaysListService } from 'src/app/features/days/days-list/services/days-list.service';
import { SunriseSunsetData } from 'src/app/shared/models/sunrise-sunset.model';

@Component({
  selector: 'app-days-list',
  templateUrl: './days-list.component.html',
  styleUrls: ['./days-list.component.scss'],
  providers: [
    DaysListService
  ],
})
export class DaysListComponent implements OnInit {

  sunriseSunsetItems$!: Observable<SunriseSunsetData[]>;

  readonly sunriseSunsetHourFormat = 'H:mm';

  constructor(private daysListService: DaysListService) { }

  ngOnInit(): void {
    this.sunriseSunsetItems$ = this.daysListService.getSunriseSunsetItems$();
  }

}
