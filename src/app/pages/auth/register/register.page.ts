import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from "@angular/forms";
import { NavController } from "@ionic/angular";
import { AuthService } from "src/app/services/auth/auth.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.page.html",
  styleUrls: ["./register.page.scss"],
})
export class RegisterPage implements OnInit {
  public validationForm: FormGroup;
  public errorMessage: string = "";
  public successMessage: string = "";
  public isPasswordVisible: boolean = false;
  public validationMessages = {
    userName: [
      { type: "required", message: "UserName is required." },
      {
        type: "minlength",
        message: "UserName must be at least 8 characters long.",
      },
    ],
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
    private navCtrl: NavController,
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.validationForm = this.formBuilder.group({
      userName: new FormControl(
        "",
        Validators.compose([Validators.minLength(8), Validators.required])
      ),
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

  registerUser(validationFormValue) {
    //console.log(validationFormValue);
    this.authService.registerUser(validationFormValue).then(
      (res) => {
        console.log(res);
        this.errorMessage = "";
        this.successMessage = "Your account has been created. Please log in.";
        this.navCtrl.navigateRoot("/login");
      },
      (err) => {
        console.log(err);
        this.errorMessage = err.message;
        this.successMessage = "";
      }
    );
  }
}
