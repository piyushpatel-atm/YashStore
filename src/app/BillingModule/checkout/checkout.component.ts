import { Component, ElementRef, NgZone, ViewChild,OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import jsPDF from 'jspdf';
import { ToastrService } from 'ngx-toastr';
import { ProductServiceService } from 'src/app/product-service.service';
import { cartProduct } from 'src/app/products/product';
import html2canvas from 'html2canvas';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
 

  constructor(public cs: ProductServiceService,
    public router: Router,
    private toastr: ToastrService,
    public afs: AngularFirestore, // Inject Firestore service
    public afAuth: AngularFireAuth, // Inject Firebase auth service
    public ngZone: NgZone,
    public dialog: MatDialog
    ) { }

   
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



  openDialog() {

    this.dialog.open(DialogExample,{
      width:'750px',
      height:'750px'
    });

  }


}
@Component({

  selector: 'DialogExample',

  templateUrl: '../ordernow.html',

})

export class DialogExample {
  constructor(public cs: ProductServiceService,
    public router: Router,
    private toastr: ToastrService,
    public afs: AngularFirestore, // Inject Firestore service
    public afAuth: AngularFireAuth, // Inject Firebase auth service
    public ngZone: NgZone,
    public dialog: MatDialog
    ) { }


    // @ViewChild('content', {static: false}) el!:ElementRef;


    // generatePDF(){



    //   let pdf = new jsPDF('p','pt','a4');
  
    //   pdf.html(this.el.nativeElement,{
  
    //     callback:(pdf)=>{
  
  
  
    //        pdf.save("Invoice.pdf");
  
  
  
    //     }
  
    //   });
    // }
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