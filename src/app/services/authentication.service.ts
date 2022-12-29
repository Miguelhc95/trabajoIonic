import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {AngularFirestore,} from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  userData: any;
  constructor(
    public afStore: AngularFirestore,
    public ngFireAuth: AngularFireAuth,
    public router: Router,
    public ngZone: NgZone
  ) {
    this.ngFireAuth.authState.subscribe((user) => {
      try{
        if (user) {
          this.userData = user;
          localStorage.setItem('user', JSON.stringify(this.userData));
          JSON.parse(localStorage.getItem('user')!);
        } else {
          localStorage.setItem('user', "");
          JSON.parse(localStorage.getItem('user')!);
        }
      }catch(error:any){
        console.log("Error login: " +error.message);
      };
    });
  }
  // Login in with email/password
  SignIn(email: string, password: string) {
    return this.ngFireAuth.signInWithEmailAndPassword(email, password);
  }
  // Register user with email/password
  RegisterUser(email: string, password: string) {
    return this.ngFireAuth.createUserWithEmailAndPassword(email, password);
  }
  // Email verification when new user register
  SendVerificationMail() {
    return this.ngFireAuth.currentUser.then((u: any) => u.sendEmailVerification())
    .then(() => {
        this.router.navigate(['login']);
      });
    
  }
  // Recover password
  PasswordRecover(passwordResetEmail: any) {
    return this.ngFireAuth
    .sendPasswordResetEmail(passwordResetEmail)
    .then(() => {
        window.alert(
          'Se ha enviado el correo con el enlace para reestablecer su contraseña, revise su carpeta de entrada o spam.'
        );
      })
      .catch((error) => {
        window.alert(error);
      });
    }
    // Returns true when user is looged in
    get isLoggedIn(): boolean {
      const user = JSON.parse(localStorage.getItem('user')!);
      return user !== null && user.emailVerified !== false ? true : false;
    }
    // Returns true when user's email is verified
    get isEmailVerified(): boolean {
      const user = JSON.parse(localStorage.getItem('user')!);
    return user.emailVerified !== false ? true : false;
  }
  
  // Sign-out
  SignOut() {
    return this.ngFireAuth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['login']);
    });
  }
  
  //Delete user
  DeleteUser(){
    localStorage.removeItem('user');
    this.ngFireAuth.currentUser.then(user => user?.delete());
  
    window.alert("Usuario eliminado con éxito");
    this.router.navigate(['home']);
  }
}