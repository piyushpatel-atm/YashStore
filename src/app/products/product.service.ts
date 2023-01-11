import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from './category';
import {Product} from './product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient:HttpClient) { }
  baseUrl:string="http://localhost:3000";
  createProduct(productBody: any):Observable<Product[]>
  {
    const baseUrl="http://localhost:3000/product";
    return this.httpClient.post<Product[]>(baseUrl,productBody);
  }
  getItem(id:any){
    return this.httpClient.get<Product>(this.baseUrl+"/product/"+id);
  }

  viewProduct(categoryId:any):Observable<Product[]>
  {
    const baseUrl="http://localhost:3000/product?id="+categoryId;
    return this.httpClient.get<Product[]>(baseUrl);
  }
  viewAllProduct():Observable<Product[]>
  {
    const baseUrl="http://localhost:3000/product";
    return this.httpClient.get<Product[]>(baseUrl);
  }

  updateProduct(productID: string, productBody: any):Observable<Product[]>
  {
    const baseUrl="http://localhost:3000/product/"+productID;
    return this.httpClient.put<Product[]>(baseUrl, productBody);
  }

  deleteProduct(productID: number):Observable<Product[]>
  {
    const baseUrl="http://localhost:3000/product/"+productID;
    return this.httpClient.delete<Product[]>(baseUrl);
  }

  searchCategoryProduct(categoryId:any):Observable<Product[]>
  {
    const baseUrl="http://localhost:3000/product?categoryId="+categoryId;
    return this.httpClient.get<Product[]>(baseUrl);
  } 
  getCategory():Observable<Category[]>{
    const categoryUrl="http://localhost:3000/categories/";
    return this.httpClient.get<Category[]>(categoryUrl);
  }

 
}
