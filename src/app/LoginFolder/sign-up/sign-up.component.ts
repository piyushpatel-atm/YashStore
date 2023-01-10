import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/shared/user.service';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private us: UserService,
    public authService:AuthService
  ) {}

  hide = true;

  empForm!: FormGroup;

  emailpattern!: '^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$';

  passpatern!: '^[a-zA-Z0-9]';

  ngOnInit(): void {
    this.empForm = this.fb.group({
      id: [''],

      name: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(32),
        ],
      ],

      email: ['', [Validators.required, Validators.email]],

      password: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(12),
          Validators.pattern(this.passpatern),
        ],
      ],

      mob: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  OnSubmit() {
    if (this.empForm.valid) {
      
      this.us.UserPost(this.empForm.value).subscribe();

      console.log(this.empForm.value);

      this.authService.SignUp(this.empForm.value.email, this.empForm.value.password);

      alert('Record added');
    }
  }

  signUpWithGoogle() {
    this.authService.GoogleAuth();
  }
}
