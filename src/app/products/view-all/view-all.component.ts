import { Component, OnInit,Input} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Toast, ToastrModule, ToastrService } from 'ngx-toastr';
import { ProductServiceService } from 'src/app/product-service.service';
import { Category } from '../category';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-view-all',
  templateUrl: './view-all.component.html',
  styleUrls: ['./view-all.component.css']
})
export class ViewAllComponent implements OnInit {
  productID!:string;

  productList!: Product[];
  constructor(private toastr: ToastrService,private activatedRoute:ActivatedRoute,private productService:ProductService,private cs:ProductServiceService){}
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data=>{
      this.productID=data['id']
     })
    this.productService.viewAllProduct().subscribe(data=>{
      this.productList=data ;
    })
  }
  addCart(data:any){
    this.cs.setCartData(data).subscribe();
    this.toastr.success("Item is added in cart successfully")
    
  }
  numSequence(n: number): Array<number> {
    return Array(n);
  }

}
