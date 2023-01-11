import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit{
  constructor(private fb:FormBuilder,public router:Router){ }
  hide:boolean=true;
  loginFormGroup!:FormGroup
  ngOnInit(): void {
    this.loginFormGroup=this.fb.group({
      loginName:['',Validators.required],
      password:['',Validators.required]
    })
  }
  submit(){
    this.router.navigateByUrl('adminDashboard')
  }


}
