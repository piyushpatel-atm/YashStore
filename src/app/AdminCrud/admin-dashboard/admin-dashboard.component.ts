import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {  Router } from '@angular/router';
import { ProductServiceService } from 'src/app/product-service.service';
import { itemmodule } from 'src/app/shared/data-type';
import { AuthService } from 'src/app/shared/services/auth.service';
import { AddItemComponent } from '../add-item/add-item.component';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit{
  constructor(public authService: AuthService,private router:Router,public cs:ProductServiceService) {}
  list:itemmodule[] = [];
  static itemobj:itemmodule;
  ngOnInit():void {
   this.cs.getItemValue().subscribe(ul=>{
    this.list=ul;
  console.log(ul);
  console.log(this.list);
  });
   
    
  }
  additem(){
    this.router.navigate(['additem']);
  }
  Delete(id:number){
    this.cs.deleteItemValue(id).subscribe();
    window.location.reload();
  }
  updateItem(data:any){
    AdminDashboardComponent.itemobj=data;
    console.log(AdminDashboardComponent);
    this.cs.sendClickEvent(data);
  }
 
}
