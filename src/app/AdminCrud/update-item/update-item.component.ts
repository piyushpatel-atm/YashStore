import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductServiceService } from 'src/app/product-service.service';
import { Product } from 'src/app/products/product';
import { itemmodule } from 'src/app/shared/data-type';

@Component({
  selector: 'app-update-item',
  templateUrl: './update-item.component.html',
  styleUrls: ['./update-item.component.css']
})
export class UpdateItemComponent implements OnInit{
  constructor(private cs:FormBuilder,public fb:ProductServiceService,public router:ActivatedRoute,public Router:Router){}
  item!:FormGroup;
  obj!:itemmodule;
  ngOnInit(){
    this.item=this.cs.group({
      id:[''],
      price:['',Validators.required],
      productImg:['',Validators.required],
      productName:['',Validators.required],
      categoryId:[''],
      description:[''],
      rating:[''],
      isAvailble:['']
    })
    let productIt=this.router.snapshot.paramMap.get('id');
    this.fb.getItem(productIt).subscribe(obj=>{this.obj=obj;
      this.item.setValue(this.obj)});
    
  }
 
 submit(){
   if(this.item.valid){
    console.log(this.item.value)
      this.fb.updateItem(this.item.value.id,this.item.value).subscribe();
      this.Router.navigate(['category'])
      
   }else{
    alert("error in data")
   }
 }

}
