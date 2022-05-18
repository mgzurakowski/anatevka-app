import { DatePipe } from '@angular/common';
import { Injectable } from '@angular/core';

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
  
}
