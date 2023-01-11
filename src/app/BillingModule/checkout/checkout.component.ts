import { Component, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProductServiceService } from 'src/app/product-service.service';
import { cartProduct } from 'src/app/products/product';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {

  constructor(public cs: ProductServiceService,
    public router: Router,
    private toastr: ToastrService,
    public afs: AngularFirestore, // Inject Firestore service
    public afAuth: AngularFireAuth, // Inject Firebase auth service
    public ngZone: NgZone) { }
  coupons:number=0;
  shipping: number = 60;
  Discount: number = 30;
  totalPrice: number = 0;
  cartList: cartProduct[] = [];
  email: string = JSON.parse(localStorage.getItem('user')!).email;
  ngOnInit(): void {

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
      this.cartList.forEach(list => {
        this.totalPrice += list.price

      });
    });


  }
  apply(){
    this.coupons=30
  }
}
