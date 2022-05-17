import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodayComponent } from './today/today.component';
import { DaysRoutingModule } from 'src/app/features/days/days-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TodayHeaderComponent } from './today/header/today-header.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    TodayComponent,
    TodayHeaderComponent,
  ],
  imports: [
    CommonModule,
    DaysRoutingModule,
    FontAwesomeModule,
    SharedModule,
  ]
})
export class DaysModule { }
