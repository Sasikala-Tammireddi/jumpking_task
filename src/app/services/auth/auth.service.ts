import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }
  
  registerUser(value) {
    return new Promise<any>((resolve, reject) => {
      firebase
        .auth()
        .createUserWithEmailAndPassword(value.email, value.password)
        .then(
          (res: firebase.auth.UserCredential) => resolve(res),
          (err) => reject(err)
        );
    });
  }

  recover(value) {
    firebase
      .auth()
      .sendPasswordResetEmail(value)
      .then((resp) => {
        let message = "Password reset email sent";
        this.router.navigate(["/login"]);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  userDetails() {
    return firebase.auth().currentUser;
  }

  loginUser(value) {
    return new Promise<any>((resolve, reject) => {
      firebase
        .auth()
        .signInWithEmailAndPassword(value.email, value.password)
        .then(
          (res: firebase.auth.UserCredential) => resolve(res),
          (err) => reject(err)
        );
    });
  }

}
