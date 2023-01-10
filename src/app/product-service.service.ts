import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { cartProduct, Product } from './products/product';
import { itemmodule } from './shared/data-type';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(public http: HttpClient) { }
  url: string = "http://localhost:3000";
  setItemValue(data:itemmodule) {
    console.log(data)
    return this.http.post<itemmodule>(this.url + "/product", data);
  }
  getItemValue():Observable<itemmodule[]>{
  return this.http.get<itemmodule[]>(this.url+ "/product");
  }
  deleteItemValue(id: number) {
    return this.http.delete(this.url + "/product/" + id);
  }
  getItem(id:any){
    return this.http.get<itemmodule>(this.url+"/product/"+id);
  }
  updateItem(id:number,data:itemmodule){
    return this.http.put<itemmodule>(this.url+"/product/"+id,data)
  }

  getCartData(){
    return this.http.get<cartProduct[]>(this.url+ "/cartData");
  }
  setCartData(data:any){
    console.log(data);
    return this.http.post<any>(this.url + "/cartData", data);
  }
  removeCartData(id:any){
    return this.http.delete(this.url + "/cartData/" + id);
  }
  updateCart(id:number,data:any){
    return this.http.put<any>(this.url+"/cartData/"+id,data)
  }


  
}
