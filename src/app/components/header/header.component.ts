import {Component, OnInit} from '@angular/core';
import {RouteNavigator} from '../../services/route-navigator.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private routeNavigator: RouteNavigator) {
  }

  ngOnInit() {
  }

  toHome() {
    this.routeNavigator.toHome();
  }

  toPublications() {
    this.routeNavigator.toPublications();
  }
}
