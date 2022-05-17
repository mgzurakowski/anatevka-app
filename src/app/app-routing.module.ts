import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'days',
    loadChildren: () =>
      import('./features/days/days.module').then(
        (m) => m.DaysModule
      ),
  },
  {
    path: '',
    redirectTo: '/days/today',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: '/days/today',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
