import { Component, NgZone, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProductServiceService } from 'src/app/product-service.service';
import { cartProduct, Product } from 'src/app/products/product';
import { AuthService } from 'src/app/shared/services/auth.service'

@Component({
  selector: 'app-cart-module',
  templateUrl: './cart-module.component.html',
  styleUrls: ['./cart-module.component.css']
})
export class CartModuleComponent implements OnInit {
  
  userData: any; // Save logged in user data
  constructor(public cs: ProductServiceService, public router: Router, private toastr: ToastrService,
    public afs: AngularFirestore, // Inject Firestore service
    public afAuth: AngularFireAuth, // Inject Firebase auth service
    public ngZone: NgZone) { }
  totalPrice: number = 0;
  cartList: cartProduct[] = [];
  lock: boolean = false;
  tableLock: boolean = false;
  email: string = JSON.parse(localStorage.getItem('user')!).email;
  ngOnInit(): void {
    this.cartList=[]
    this.cs.getCartData().subscribe(list => {
      list.forEach(element => {
        console.log(element)
        console.log(this.email)
        console.log(element.email)
        if (element.email === this.email) {
          console.log(element)
          this.cartList.push(element)
        }

      });

      if (this.cartList.length <= 0) {
        this.lock = true;
        this.totalPrice=0
      } else {
        this.tableLock = true;
      }
      this.cartList.forEach(list => {
        console.log(list.price)
        this.totalPrice += list.price*list.quantity;
        console.log(list.quantity)
        console.log(typeof(this.totalPrice))
        

      });
    });


  }
  remove(data: any) {
    this.totalPrice -= data.price
    this.cs.removeCartData(data.id).subscribe();
    this.cartList = [];
    this.totalPrice = 0;
    this.cs.getCartData().subscribe(list => {
      list.forEach(element => {
        if (element.email == this.email) {
          this.cartList.push(element)
        }
      });
      if (this.cartList.length <= 0) {
        this.lock = true;
        this.totalPrice=0
      } else {
        this.tableLock = true;
      };
      this.cartList.forEach(list => {
        this.totalPrice += (list.price*list.quantity)

      })
    });
    this.toastr.warning("Data Remove from Cart")

    this.router.navigate(['/cartItem'])
  }

  inc(i: any) {
 // console.log(item.quantity);

    if (i.quantity != 5) {
      i.quantity += 1;
      this.cs.updateCart(i.id, i).subscribe();
      this.totalPrice=0;
      this.cartList = [];
    }
    
    this.cs.getCartData().subscribe(list => {
      list.forEach(element => {
        if (element.email == this.email) {
          this.cartList.push(element)
        }
      });
      if (this.cartList.length <= 0) {
        this.lock = true;
        this.totalPrice=0
      } else {
        this.tableLock = true;
      };
      this.cartList.forEach(list => {
        this.totalPrice += (list.price*list.quantity)

      })
    });

    // this.cs.getCartData().subscribe(list => {
    //   this.cartList = list;

    //   if (list.length <= 0) {

    //     this.lock = true;

    //   } else {

    //     this.tableLock = true;

    //   };

    //   this.totalPrice = 0;

    //   list.forEach(list => {

    //     // this.totalPrice+=list.price

    //     this.totalPrice += (list.price * list.quantity)
    //   }
    //   )
    // });
    this.router.navigate(['cartItem'])
  }
  dec(i:any){
    // console.log(item);
     if(i.quantity != 1){
    i.quantity -= 1;
    this.cs.updateCart(i.id, i).subscribe();
    this.totalPrice=0;
    this.cartList = [];
    this.cs.getCartData().subscribe(list => {
      list.forEach(element => {
        if (element.email == this.email) {
          this.cartList.push(element)
        }
      });
      if (this.cartList.length <= 0) {
        this.lock = true;
        this.totalPrice=0
      } else {
        this.tableLock = true;
      };
      this.cartList.forEach(list => {
        
        this.totalPrice += (list.price*list.quantity)

      })
    });
      }}
}

