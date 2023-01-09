
import { Component, Input, NgModule, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Category } from './products/category';
import { ProductService } from './products/product.service';
import { ProductsComponent } from './products/products.component';
import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ProductsComponent],
  
})


export class AppComponent implements  OnInit{
  title = 'yashStore';
  searchCategory!:string;
  categoryList!:Category[];
  
  constructor(private activatedRoute:ActivatedRoute, private productsService:ProductService){}
  ngOnInit(): void {
  
   this.productsService.getCategory().subscribe(data=>{
    this.categoryList=data;

   })
 
  }
  

export class AppComponent {
  title = 'YashStore';

  screenHeight: any=window.innerHeight;;
  screenWidth: any=window.innerWidth;
  footerMaxHeight: number=this.screenHeight - 130;;

    // console.log(this.screenHeight, this.screenWidth);
  //header and footer aprox
  }

 

