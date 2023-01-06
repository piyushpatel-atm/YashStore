import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProductServiceService } from 'src/app/product-service.service';
import { AdminDashboardComponent } from '../admin-dashboard/admin-dashboard.component';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit{
  clickEventsubscription!: Subscription;
  constructor(private cs:FormBuilder,public fb:ProductServiceService,public router:Router){
    this.clickEventsubscription=this.fb.getClickEvent().subscribe((data)=>
    {this.setdata()
    this.open()}
    )
  }
  
  item!:FormGroup;
  list!:any[]
  ngOnInit(): void {
    this.item=this.cs.group({
      price:['',Validators.required],
      itemUrl:['',Validators.required],
      name:['',Validators.required]
    })
   
  }
  submit(){
    if(this.item.valid)
    {
    this.fb.setItemValue(this.item.value).subscribe();
    window.alert("Add succesfully");
    this.router.navigate(['adminDashboard']);
   }else{
    window.alert("invalid data")
   }
  }
  setdata(){
    this.item.setValue(AdminDashboardComponent.itemobj);
  }
  open(){
  this.router.navigate(['additem'])
  }
  

}