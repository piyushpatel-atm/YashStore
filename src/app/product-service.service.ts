import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { itemmodule } from './shared/data-type';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(public http: HttpClient) { }
  url: string = "http://localhost:3000";
  setItemValue(data:itemmodule) {
    console.log(data)
    return this.http.post<itemmodule>(this.url + "/allProduct", data);
  }
  getItemValue():Observable<itemmodule[]>{
  return this.http.get<itemmodule[]>(this.url+ "/allProduct");
  }
  deleteItemValue(id: number) {
    return this.http.delete(this.url + "/allProduct/" + id);
  }
  getItem(id:any){
    return this.http.get<itemmodule>(this.url+"/allProduct/"+id);
  }
  updateItem(id:number,data:itemmodule){
    return this.http.put<itemmodule>(this.url+"/allProduct/"+id,data)
  }
  
}
