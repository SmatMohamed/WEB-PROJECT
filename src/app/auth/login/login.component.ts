import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { Router } from '@angular/router';

import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public registerForm: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    public authService: AuthService,
    public router: Router
  ) {
    this.registerForm = this.formBuilder.group({
      // name: [''],
      email: [''],
      password: [''],
      // confirm_password: ['']
    });
   }

  ngOnInit(): void {
  }

  signupUser() {
    this.router.navigate(['/home']);
    this.authService.signin(this.registerForm.value).subscribe(res => {
      if(res.status == 200) {
       // this.registerForm.reset();
        this.router.navigate(['/home']);
      }
    });
  }

}

