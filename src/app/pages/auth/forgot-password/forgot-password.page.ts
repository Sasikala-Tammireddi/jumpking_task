import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {
  public validationForm: FormGroup;
  public errorMessage: string = "";
  public validationMessages = {
    email: [
      { type: "required", message: "Email is required." },
      { type: "pattern", message: "Please enter a valid email." },
    ],
  };
  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
    this.validationForm = this.formBuilder.group({
      email: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$"),
        ])
      ),
    });
  }

  recoreyPassword(value) {
    this.authService.recover(value.email);
  }

  goToLogin() {
    this.navCtrl.setDirection("root");
    this.router.navigate(['/login']);
  }
}
