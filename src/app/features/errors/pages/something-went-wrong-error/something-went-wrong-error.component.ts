import { Component, OnInit } from '@angular/core';
import { faArrowRotateRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-something-went-wrong-error',
  templateUrl: './something-went-wrong-error.component.html',
  styleUrls: ['./something-went-wrong-error.component.scss']
})
export class SomethingWentWrongErrorComponent implements OnInit {

  iconRefresh = faArrowRotateRight;

  constructor() { }

  ngOnInit(): void {
  }

}
