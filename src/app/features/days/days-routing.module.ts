import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DaysListComponent } from 'src/app/features/days/days-list/days-list.component';
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
  {
    path: 'list',
    component: DaysListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DaysRoutingModule {}
