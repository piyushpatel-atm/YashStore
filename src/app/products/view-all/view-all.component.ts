import { Component, OnInit,Input, NgZone} from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute } from '@angular/router';
import { Toast, ToastrModule, ToastrService } from 'ngx-toastr';
import { ProductServiceService } from 'src/app/product-service.service';
import { Category } from '../category';
import { cartProduct, Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-view-all',
  templateUrl: './view-all.component.html',
  styleUrls: ['./view-all.component.css']
})
export class ViewAllComponent implements OnInit {
  productID!:string;
  userData: any;
  email!:any; 
  productList!: Product[];
  constructor(private toastr: ToastrService,private activatedRoute:ActivatedRoute,private productService:ProductService,private cs:ProductServiceService,
  public afs: AngularFirestore, // Inject Firestore service
  public afAuth: AngularFireAuth, // Inject Firebase auth service
  public ngZone: NgZone){
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        this.email=JSON.parse(localStorage.getItem('user')!).email;
      } 
    });
  }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data=>{
      this.productID=data['id']
     })
    this.productService.viewAllProduct().subscribe(data=>{
      this.productList=data ;
    })
  }
  addCart(data:any){
    console.log(data)
    let cardItem=new cartProduct();
    cardItem.categoryId=data.categoryId;
    cardItem.description=data.description
    cardItem.quantity=1;
    cardItem.email=this.email;
    cardItem.price=data.price;
    cardItem.productImg=data.productImg;
    cardItem.productName=data.productName;
    cardItem.isAvailble=data.isAvailble;
    cardItem.rating=data.rating;
    console.log(cardItem,"string");
    console.log(this.email)
    this.cs.setCartData(cardItem).subscribe();
    this.toastr.success("Item is added in cart successfully")
    
  }

}
