import { Component, OnInit } from '@angular/core';
import { faArrowRotateRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-geolocation-error',
  templateUrl: './geolocation-error.component.html',
  styleUrls: ['./geolocation-error.component.scss']
})
export class GeolocationErrorComponent implements OnInit {

  iconRefresh = faArrowRotateRight;

  constructor() { }

  ngOnInit(): void {
  }

}
