import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit{
  constructor(private cs:FormBuilder,private router:Router){}
  adminForm!:FormGroup;
  hide:boolean=true;
  ngOnInit(){
    this.adminForm=this.cs.group({
      loginName:[''],
      password:['']
    })

  }
  submit(){
    this.router.navigate(['navbar'])
  }



}
