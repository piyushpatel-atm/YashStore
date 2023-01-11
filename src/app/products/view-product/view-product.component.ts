import { Component, NgZone, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProductServiceService } from 'src/app/product-service.service';
import { cartProduct, Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {
  productID!:string;
productData!:Product[];



constructor(private activatedRoute: ActivatedRoute, private productService:ProductService,private cs:ProductServiceService,private toastr:ToastrService
  , public afs: AngularFirestore, // Inject Firestore service
  public afAuth: AngularFireAuth, // Inject Firebase auth service
  public ngZone: NgZone){}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data=>{
     this.productID=data['id'],console.log(this.productID)
    })
    this.productService.viewProduct(this.productID).subscribe(viewData=>{
      this.productData=viewData;
      console.log(this.productData);
    })
  }
  addCart(data:any){
    console.log(data)
    let cardItem=new cartProduct();
    cardItem.categoryId=data.categoryId;
    cardItem.description=data.description
    cardItem.quantity=1;
    cardItem.email=JSON.parse(localStorage.getItem('user')!).email;
    cardItem.price=data.price;
    cardItem.productImg=data.productImg;
    cardItem.productName=data.productName;
    cardItem.isAvailble=data.isAvailble;
    cardItem.rating=data.rating;
    console.log(cardItem,"string");
    this.cs.setCartData(cardItem).subscribe();
    this.toastr.success("Item is added in cart successfully")

    // this.cs.setCartData(data).subscribe();
    // this.toastr.success("Item is added in cart successfully")
    
  }

}
