import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodayComponent } from './today/today.component';
import { DaysRoutingModule } from 'src/app/features/days/days-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TodayHeaderComponent } from './today/header/today-header.component';
import { TodayTileComponent } from './today/tile/today-tile.component';

@NgModule({
  declarations: [
    TodayComponent,
    TodayHeaderComponent,
    TodayTileComponent
  ],
  imports: [
    CommonModule,
    DaysRoutingModule,
    FontAwesomeModule
  ]
})
export class DaysModule { }
