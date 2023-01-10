import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, TitleStrategy } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProductServiceService } from 'src/app/product-service.service';
import { Category } from '../category';
import { Product } from '../product';
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
  constructor(private activatedRoute:ActivatedRoute,private cs:ProductServiceService, private productservice:ProductService,private toastr:ToastrService){}
  addCart(data:any){
    this.cs.setCartData(data).subscribe();
    this.toastr.success("Item is added in cart successfully")
    
  }
    // OnClick(categoryId:any){
    //   this.productservice.searchCategoryProduct(categoryId).subscribe(
    //     list=>{this.productList=list; 
    //     console.log(list);
    //     }
        
    //     )
    // }
  ngOnInit(): void {
   
    // this.activatedRoute.queryParams.subscribe(data=>{
    //   this.searchCategory=data['id'];
    //   console.log(this.searchCategory);

      let categoryId=this.activatedRoute.snapshot.paramMap.get("id");
    

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


