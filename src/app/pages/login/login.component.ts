import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  isLogin: boolean = true;

  constructor(private router: Router) { }

  login() {
    this.router.navigateByUrl('/sell-point');
  }
}
