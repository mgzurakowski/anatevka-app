import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-days-list-day-card',
  templateUrl: './days-list-day-card.component.html',
  styleUrls: ['./days-list-day-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DaysListDayCardComponent implements OnInit {

  @Input() title!: string;
  @Input() sunriseText!: string;
  @Input() sunsetText!: string;

  readonly iconSun = faSun;
  readonly iconMoon = faMoon;

  constructor() { }

  ngOnInit(): void {
  }

}
