import { BreakpointObserver } from '@angular/cdk/layout';
import {
  Component,
  ViewChild,
} from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'waku-waku-angular';
  isOpen: boolean = false;

  constructor(public router: Router) { }

  navOpen($event: any): void {
    this.isOpen = !this.isOpen;
    console.log('navOpen', $event);
  }

  checkRoute() {
    return this.router.url.includes('/login')
  }

}
