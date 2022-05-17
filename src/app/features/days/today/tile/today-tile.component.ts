import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-today-tile',
  templateUrl: './today-tile.component.html',
  styleUrls: ['./today-tile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodayTileComponent implements OnInit {

  @Input() icon?: IconDefinition;
  @Input() text?: string | null;

  constructor() { }

  ngOnInit(): void {
  }

}
