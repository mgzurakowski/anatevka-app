import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { TileComponent } from 'src/app/shared/components/tile/tile.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    SpinnerComponent,
    TileComponent,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
  ],
  exports: [
    SpinnerComponent,
    TileComponent,
  ]
})
export class SharedModule { }
