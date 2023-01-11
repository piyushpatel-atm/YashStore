import { Component, NgZone, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute, TitleStrategy } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProductServiceService } from 'src/app/product-service.service';
import { Category } from '../category';
import { cartProduct, Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-view-product-by-category',
  templateUrl: './view-product-by-category.component.html',
  styleUrls: ['./view-product-by-category.component.css']
})
export class ViewProductByCategoryComponent implements OnInit {
  searchCategory!:Category
  // categoryId!:string
  productList!:Product[];
  constructor(private activatedRoute:ActivatedRoute,private cs:ProductServiceService, private productservice:ProductService,private toastr:ToastrService,
    public afs: AngularFirestore, // Inject Firestore service
    public afAuth: AngularFireAuth, // Inject Firebase auth service
    public ngZone: NgZone){}
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

    
    
  }
  
  ngOnInit(): void {


      let categoryId=this.activatedRoute.snapshot.paramMap.get("id");
       console.log(categoryId);
      

      this.productservice.searchCategoryProduct(categoryId).subscribe({
        next:  categoryData=>{
          this.productList=categoryData;
          console.log(categoryData);
        },
        error: (message)=>{
          console.log(`${message}`)
        }

      }
     )
    }
  }


