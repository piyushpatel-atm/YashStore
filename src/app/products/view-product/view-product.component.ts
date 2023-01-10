import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProductServiceService } from 'src/app/product-service.service';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {
  productID!:string;
productData!:Product[];



constructor(private activatedRoute: ActivatedRoute, private productService:ProductService,private cs:ProductServiceService,private toastr:ToastrService){}

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
    this.cs.setCartData(data).subscribe();
    this.toastr.success("Item is added in cart successfully")
    
  }

}
