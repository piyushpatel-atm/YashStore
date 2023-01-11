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
  coupons:number=0;
  // quantity=1;
  
  
  ngOnInit(): void {
    this.cs.getCartData().subscribe(list=>{this.cartList=list;
    if(list.length<=0){
      this.lock=true;
    }else{
      this.tableLock=true;
    }
    list.forEach(list => { 
      // this.totalPrice+=list.price
      this.totalPrice+=(list.price*list.quantity)

  //  list.forEach(list => { 
  
  //   if(list.quantity=1){

  //     this.totalPrice+=(list.price*list.quantity)



  //   }
  //   else{
  //     this.totalPrice+=(list.quantity*list.price)
  //   }
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
      };
      this.totalPrice=0;
      list.forEach(list => { 
        // this.totalPrice+=list.price
        this.totalPrice+=(list.price*list.quantity)}

    )});
    this.toastr.warning("Data Remove from Cart")
    
    this.router.navigate(['/cartItem'])
  }



  inc(i:any){
  

    // console.log(item.quantity);
    if(i.quantity != 5){

    i.quantity+= 1;

    this.cs.updateCart(i.id, i).subscribe();
  
  
    }
    this.cs.getCartData().subscribe(list=>{this.cartList=list;
      if(list.length<=0){
        this.lock=true;
      }else{
        this.tableLock=true;
      };
      this.totalPrice=0;
      list.forEach(list => { 
        // this.totalPrice+=list.price
        this.totalPrice+=(list.price*list.quantity)}

    )
    });
      this.router.navigate(['cartItem'])
  }



  dec(i:any){

    // console.log(item);
     if(i.quantity != 1){
    i.quantity -= 1;

    this.cs.updateCart(i.id, i).subscribe();
    this.cs.getCartData().subscribe(list=>{this.cartList=list;
      if(list.length<=0){
        this.lock=true;
      }else{
        this.tableLock=true;
      }
      this.totalPrice=0;
      list.forEach(list => { 
        // this.totalPrice+=list.price
        this.totalPrice+=(list.price*list.quantity)}

    )});
    
    }

    }

    // emptycart(data:any){
    //   this.cs.removeAllCart(data).subscribe();
    // }
    showIcon(i:any) {
      if (i.rating >= i+ 1) {
        return 'star';
      } else {
        return 'star_border';
      }
    }
    apply(){
      this.coupons
    }
  
  }
  // export enum StarRatingColor {
  //   primary = "primary",
  //   accent = "accent",
  //   warn = "warn"
  // }


