import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { SignInComponent } from '../LoginFolder/sign-in/sign-in.component';
import { SignUpComponent } from '../LoginFolder/sign-up/sign-up.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
 constructor(private router:Router,public dialog:MatDialog){}

 signin() {

  this.dialog.open(SignInComponent,{

    width: '500px',

    height:'500px'

  });
}

 signup(){
  this.dialog.open(SignUpComponent,{
    width: '500px',

    height:'500px'

  })
 }
}
