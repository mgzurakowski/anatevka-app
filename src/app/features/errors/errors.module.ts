import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorsRoutingModule } from 'src/app/features/errors/errors-routing.module';
import { GeolocationErrorComponent } from './pages/geolocation-error/geolocation-error.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SomethingWentWrongErrorComponent } from './pages/something-went-wrong-error/something-went-wrong-error.component';



@NgModule({
  declarations: [
    GeolocationErrorComponent,
    SomethingWentWrongErrorComponent
  ],
  imports: [
    CommonModule,
    ErrorsRoutingModule,
    FontAwesomeModule,
  ]
})
export class ErrorsModule { }
