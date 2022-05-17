import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-today-header',
  templateUrl: './today-header.component.html',
  styleUrls: ['./today-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodayHeaderComponent implements OnInit {

  @Input() cityName!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
