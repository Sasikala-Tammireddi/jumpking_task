import { Component } from '@angular/core';
import * as firebase from 'firebase';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
const config = {
  apiKey: "AIzaSyBa3eFYq1SqyuU8bUh8N_AVa8eWtAZ19nA",
  authDomain: "mydatabase-4be6d.firebaseapp.com",
  databaseURL: "https://mydatabase-4be6d.firebaseio.com",
  projectId: "mydatabase-4be6d",
  storageBucket: "mydatabase-4be6d.appspot.com",
  messagingSenderId: "618643324030",
  appId: "1:618643324030:web:a29162b0e463d6d8",
};
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    firebase.initializeApp(config);
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.overlaysWebView(true);
      this.splashScreen.hide();
    });
  }
}
