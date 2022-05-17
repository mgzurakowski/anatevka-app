import { Component, OnInit } from '@angular/core';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.scss']
})
export class TodayComponent implements OnInit {

  readonly iconSun = faSun;
  readonly iconMoon = faMoon;

  constructor() { }

  ngOnInit(): void {
  }

}
