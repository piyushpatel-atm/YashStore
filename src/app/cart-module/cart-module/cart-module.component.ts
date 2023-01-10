import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProductServiceService } from 'src/app/product-service.service';
import { Product } from 'src/app/products/product';

@Component({
  selector: 'app-cart-module',
  templateUrl: './cart-module.component.html',
  styleUrls: ['./cart-module.component.css']
})
export class CartModuleComponent implements OnInit{
  constructor(public cs:ProductServiceService,public router:Router,private toastr: ToastrService){}
  totalPrice:number=0;
  cartList!:Product[];
  lock:boolean=false;
  tableLock:boolean=false;
  ngOnInit(): void {
    this.cs.getCartData().subscribe(list=>{this.cartList=list;
    if(list.length<=0){
      this.lock=true;
    }else{
      this.tableLock=true;
    }
   list.forEach(list => { this.totalPrice+=list.price
    
  });});

  
  }
  remove(data:any){
    this.totalPrice-=data.price
    this.cs.removeCartData(data.id).subscribe();

    this.cs.getCartData().subscribe(list=>{this.cartList=list;
      if(list.length<=0){
        this.lock=true;
      }else{
        this.tableLock=true;
      }});
    this.toastr.warning("Data Remove from Cart")
    
    this.router.navigate(['/cartItem'])
  }

}
