import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodayComponent } from 'src/app/features/days/today/today.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'today',
    pathMatch: 'full'
  },
  {
    path: 'today',
    component: TodayComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DaysRoutingModule {}
