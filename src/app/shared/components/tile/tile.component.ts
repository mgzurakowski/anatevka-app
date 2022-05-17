import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TileComponent implements OnInit {

  @Input() icon?: IconDefinition;
  @Input() text?: string | null;

  constructor() { }

  ngOnInit(): void {
  }

}
