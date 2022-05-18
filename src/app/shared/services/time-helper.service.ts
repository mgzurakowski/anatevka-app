import { Injectable } from '@angular/core';
import { startWith, tap, timer } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TimeHelperService {

  constructor() { }

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
    // get day number with zero padded (eg. 01 or 11)
    const day = `${date.getDate()}`.padStart(2, '0');
    // get month number with zero padded (eg. 01 or 11)
    const month = `${date.getMonth() + 1}`.padStart(2, '0');
    const year = '' + date.getFullYear();
    
    return `${year}-${month}-${day}`;
  }

  timeToNextHourInMs(currentTimestampMs: number) {
    const timestampSeconds = currentTimestampMs / 1000;
    const numberOfSecondsIntoTheCurrentHour = timestampSeconds % 3600;
    const numberOfSecondsToTheNextHour =
      3600 - numberOfSecondsIntoTheCurrentHour;

    return numberOfSecondsToTheNextHour * 1000;
  }

  refreshEachQuarterOfHour$() {
    const timeToRefresh = this.getTimeToNextQuarterOfHour();

    return timer(timeToRefresh, 15 * 60 * 1000)
      .pipe(
        startWith(null), // initial request
        tap((data) => console.log('asdasd'))
      );
  }

  /**
   * @returns miliseconds to next quarter of hour
   */
  getTimeToNextQuarterOfHour() {
    const currentTime = new Date();
    const minutesToNextQuarter = 15 - (currentTime.getMinutes() % 15);
    const secondsToNextQuarter = 60 - currentTime.getSeconds();

    console.log(minutesToNextQuarter, secondsToNextQuarter);
    
    
    return (minutesToNextQuarter * 60 * 1000) + (secondsToNextQuarter * 1000) - (60 * 1000);
  }
  
}
