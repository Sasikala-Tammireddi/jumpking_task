import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from "@angular/forms";
import { AuthService } from "src/app/services/auth/auth.service";
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"],
})
export class LoginPage implements OnInit {
  public validationForm: FormGroup;
  public errorMessage: string = "";
  public isPasswordVisible: boolean = false;
  public validationMessages = {
    email: [
      { type: "required", message: "Email is required." },
      { type: "pattern", message: "Please enter a valid email." },
    ],
    password: [
      { type: "required", message: "Password is required." },
      {
        type: "minlength",
        message: "Password must be at least 5 characters long.",
      },
    ],
  };
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private navCtrl: NavController,
    private router: Router
  ) {}

  ngOnInit() {
    this.validationForm = this.formBuilder.group({
      email: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$"),
        ])
      ),
      password: new FormControl(
        "",
        Validators.compose([Validators.minLength(5), Validators.required])
      ),
    });
  }

  showPassword() {
    this.isPasswordVisible = !this.isPasswordVisible;
  }

  loginUser(validationFormValue) {
    console.log(validationFormValue);
    this.authService.loginUser(validationFormValue).then(
      (res) => {
        if (res.user) {
          this.goToHome();
        }
        this.errorMessage = "";
      },
      (err) => {
        this.errorMessage = err.message;
      }
    );
  }

  goToHome() {
    this.navCtrl.setDirection('root');
    //localStorage.setItem("isUserLoggedIn", 'true');
    this.router.navigate(["/container"]);
  }

  forgotPassword() {
    this.router.navigate(["/forgot-password"])
  }
  goToRegister() {
    this.router.navigate(["/register"])
  }
}
