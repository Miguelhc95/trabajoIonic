import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  constructor(
    public authService: AuthenticationService,
    public router: Router,
    public nav: NavController
    
  ) {}

  ngOnInit() {}

  logIn(email: any, password: any) {    
    this.authService.SignIn(email.value, password.value)
      .then(() => {        
        
        if(this.authService.isEmailVerified) {          
          this.router.navigate(['tabs']);
          return true;

        } else {          
          window.alert('El email no está verificado')
          return false;
        }
      }).catch((error: any) => {
        window.alert(error.message)
      })
  }
}
