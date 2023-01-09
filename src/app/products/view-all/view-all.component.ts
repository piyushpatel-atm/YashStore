import { Component, OnInit,Input} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  constructor(private activatedRoute:ActivatedRoute,private productService:ProductService){}
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data=>{
      this.productID=data['id']
     })
    this.productService.viewAllProduct().subscribe(data=>{
      this.productList=data ;
    })
  }

}
