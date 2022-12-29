import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import firebase from 'firebase/compat';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {
  userDoc: firebase.User | undefined;
  constructor(
    public authService: AuthenticationService,
    public router: Router  ) {}

  ngOnInit() {}

  signUp(email: any, password: any){    
    this.authService.RegisterUser(email.value, password.value)
    .then((res) => {      
      this.authService.SendVerificationMail();
      this.router.navigate(['verify-email']);
    }).catch((error) => {
      window.alert(error.message)
    })
  }
}
