import {Injectable} from '@angular/core';
import {Router} from '@angular/router';

@Injectable()
export class RouteNavigator {

  constructor(private router: Router) {
  }

  toHome() {
    this.router.navigate(['']);
  }

  toPublications() {
    this.router.navigate(['/publications']);
  }

  toError() {
    this.router.navigate(['/error'], {skipLocationChange: true});
  }
}
