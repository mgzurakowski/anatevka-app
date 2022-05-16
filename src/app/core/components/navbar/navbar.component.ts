import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { faHouse } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent implements OnInit {

  iconHouse = faHouse;

  constructor() {}

  ngOnInit(): void {}

}
