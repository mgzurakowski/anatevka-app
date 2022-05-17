import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodayComponent } from './today/today.component';
import { DaysRoutingModule } from 'src/app/features/days/days-routing.module';



@NgModule({
  declarations: [
    TodayComponent
  ],
  imports: [
    CommonModule,
    DaysRoutingModule,
  ]
})
export class DaysModule { }
