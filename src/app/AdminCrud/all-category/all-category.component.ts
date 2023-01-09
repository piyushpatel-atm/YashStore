import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { updatePhoneNumber } from 'firebase/auth';
import { ProductServiceService } from 'src/app/product-service.service';
import { UpdateItemComponent } from '../update-item/update-item.component';

@Component({
  selector: 'app-all-category',
  templateUrl: './all-category.component.html',
  styleUrls: ['./all-category.component.css']
})
export class AllCategoryComponent implements OnInit {
 constructor(private cs:ProductServiceService,public dialog:MatDialog,public router:Router){}
  list!:any[];
  ngOnInit():void {
    this.cs.getItemValue().subscribe(ul=>{
     this.list=ul;
   console.log(ul);
   console.log(this.list);
   });

}
Delete(id:number){
  this.cs.deleteItemValue(id).subscribe();
  this.router.navigate(['category'])
}
Update(id:any){
   this.router.navigate(['updateItem/'+id])
}
}