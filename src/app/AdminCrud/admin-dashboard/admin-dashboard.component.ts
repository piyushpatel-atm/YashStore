import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import {  Router } from '@angular/router';
import { ProductServiceService } from 'src/app/product-service.service';
import { itemmodule } from 'src/app/shared/data-type';
import { AuthService } from 'src/app/shared/services/auth.service';
import { AddItemComponent } from '../add-item/add-item.component';
import { AllCategoryComponent } from '../all-category/all-category.component';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit{
  constructor(public authService: AuthService,private router:Router,public cs:ProductServiceService,public dialog:MatDialog) {}
  list:itemmodule[] = [];
  static itemobj:itemmodule;
  ngOnInit():void {
  }
  
 
}
