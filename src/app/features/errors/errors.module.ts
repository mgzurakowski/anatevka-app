import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorsRoutingModule } from 'src/app/features/errors/errors-routing.module';
import { GeolocationErrorComponent } from './pages/geolocation-error/geolocation-error.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
    GeolocationErrorComponent
  ],
  imports: [
    CommonModule,
    ErrorsRoutingModule,
    FontAwesomeModule,
  ]
})
export class ErrorsModule { }
