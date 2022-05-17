import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GeolocationErrorComponent } from 'src/app/features/errors/pages/geolocation-error/geolocation-error.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'geolocation',
    pathMatch: 'full',
  },
  {
    path: 'geolocation',
    component: GeolocationErrorComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ErrorsRoutingModule {}
