import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/user.service';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent implements OnInit {
  constructor(private fb: FormBuilder, public authService: AuthService) {}

  hide = true;

  empForm!: FormGroup;

  ngOnInit(): void {
    this.empForm = this.fb.group({
      email: ['', [Validators.required]],

      password: ['', [Validators.required]],
    });
  }

  OnSubmit() {
    if (this.empForm.valid) {
      if (
        this.empForm.value.email === 'admin' &&
        this.empForm.value.password === 'admin'
      ) {
        this.authService.AdminSignIn();
      } else {
        this.authService.SignIn(this.empForm.value);
      }
    }
  }
}
