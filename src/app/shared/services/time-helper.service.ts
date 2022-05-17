import { DatePipe } from '@angular/common';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimeHelperService {

  readonly sunriseSunsetDateFormat = 'yyyy-MM-dd';

  constructor(private datePipe: DatePipe) { }

  /**
   * @param date 
   * @param differenceInDays positive number for x days after given date, negative number for x days before given date
   */
  getRelativeDate(date: Date, differenceInDays: number) {
    const dayBefore = new Date(date.getTime());
    dayBefore.setDate(date.getDate() + differenceInDays);

    return dayBefore;
  }

  formatDateForSunriseSunsetApi(date: Date) {
    return this.datePipe.transform(date, this.sunriseSunsetDateFormat);
  }
  
}
