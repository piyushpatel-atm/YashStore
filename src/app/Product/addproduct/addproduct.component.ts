import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
   constructor(private cs:FormBuilder){}
  ngOnInit(): void {
   this.emp=this.cs.group({
    itemNane:[''],
    price:[''],
    itemUrl:[''],
   })
  }
   emp!:FormGroup;
   submit(){
    
   }
  

}
