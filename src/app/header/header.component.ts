import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'app/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public _authService: AuthenticationService, public router: Router) {
    // console.log('is logged from constructor header : ' + this._authService.isLoggedIn());
   }

  ngOnInit() {
    // console.log('is logged from header : ' + this._authService.isLoggedIn());
  }

  logout() {
    // console.log('logout en header component');
    this._authService.logout();
    this.router.navigate(['/login']);
  }

}
