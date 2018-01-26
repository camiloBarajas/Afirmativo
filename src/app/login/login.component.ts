import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'app/services/authentication.service';
import { SessionStorageService } from 'ngx-webstorage';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {    
    user: any = <any>{};
      constructor(public _authService: AuthenticationService,
                  public _router: Router,
                  public _locker: SessionStorageService
      ) {
      }

    ngOnInit() {

    }

    onSubmit(event: Event) {
      event.preventDefault();
      // console.log(`${this.user.username}, ${this.user.password}`)

      this._authService.logIn(this.user.username, this.user.password).subscribe(
        (data) => {
          // console.log('Login component data: ' + data);

           if (data) {
            this._router.navigate(['/home']);
           } else {
             // TO DO: return error mesasge
           }
        },
        error => {
          // console.log('Hay un error:')
          console.error('Error: '+ error);
        }
      );
    }
  }
