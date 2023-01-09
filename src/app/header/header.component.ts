import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LoginAdminComponent } from '../AdminCrud/login-admin/login-admin.component';
import { SignInComponent } from '../LoginFolder/sign-in/sign-in.component';
import { SignUpComponent } from '../LoginFolder/sign-up/sign-up.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
 constructor(private router:Router,public dialog:MatDialog){}

 adminsignup(){
    this.router.navigate(['Loginadmin'])
 }

 }

