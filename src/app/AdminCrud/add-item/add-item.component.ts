import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProductServiceService } from 'src/app/product-service.service';
import { ProductService } from 'src/app/products/product.service';
import { AdminDashboardComponent } from '../admin-dashboard/admin-dashboard.component';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit{
  constructor(private cs:FormBuilder,public fb:ProductServiceService,public router:Router,public service:ProductService){}
  
  
  item!:FormGroup;
  list!:any[]
  ngOnInit(): void {
    this.item=this.cs.group({
      price:['',Validators.required],
      productImg:['',Validators.required],
      productName:['',Validators.required],
      categoryId:[''],
      description:[''],
      rating:[''],
      isAvailble:['']
    })
   
  }
  submit(){
    if(this.item.valid)
    {
    // this.fb.setItemValue(this.item.value).subscribe();
    this.service.createProduct(this.item.value).subscribe();
    window.alert("Add succesfully");
    this.router.navigate(['category'])
   }else{
    window.alert("invalid data")
    window.location.reload();
   }
  }
  setdata(){
    this.item.setValue(AdminDashboardComponent.itemobj);
  }
  open(){
  this.router.navigate(['additem'])
  }
  

}
