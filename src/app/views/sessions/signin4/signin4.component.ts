import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl
} from "@angular/forms";
import { CustomValidators } from "ng2-validation";
import { AngularFireAuth } from "@angular/fire/auth";
import { MatSnackBar } from "@angular/material";
import { AuthService } from "src/app/shared/services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-signin4",
  templateUrl: "./signin4.component.html",
  styleUrls: ["./signin4.component.scss"]
})
export class Signin4Component implements OnInit {
  signupForm: FormGroup;
  isSigningUp: boolean = false;

  constructor(
    private router: Router,
    private authService: AuthService,
    private afAuth: AngularFireAuth,
    private snackbar: MatSnackBar,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.signupForm = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", Validators.required],
      agreed: ["", Validators.required]
    });
  }

  onSubmit() {

    if (this.signupForm.valid) {

      this.isSigningUp = true;

      this.authService
        .loginWithEmail(
          this.signupForm.get("email").value,
          this.signupForm.get("password").value
        )
        .catch(error => {
          this.snackbar.open(error, "", {
            duration: 5000
          });
        })
        .then(() => {
          if (this.afAuth.user) {
            this.router.navigateByUrl("car-list");
          }

          this.isSigningUp = false;
        });
    }
    else
    this.snackbar.open("Please, fill the form correctly",'',{duration: 5000});
  }

signinWithGoogle() {
  this.authService.signInWithGoogle().then(res => {
    this.router.navigateByUrl("/car-list");
  });
}
}
