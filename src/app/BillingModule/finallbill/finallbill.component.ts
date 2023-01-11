import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PaymentdialogComponent } from '../paymentdialog/paymentdialog.component';

@Component({
  selector: 'app-finallbill',
  templateUrl: './finallbill.component.html',
  styleUrls: ['./finallbill.component.css']
})

export class FinallbillComponent implements OnInit {

constructor(public diaglog:MatDialog,public fb:FormBuilder,public toastr:ToastrService,public router:Router){}
formvalue!:FormGroup;
ngOnInit(): void {
  this.formvalue=this.fb.group({
    payment:['',Validators.required]
  })
}


order(){
  if(this.formvalue.valid){
  this.diaglog.open(PaymentdialogComponent,{height:"400px",width:"400px"})
  this.toastr.success("Order Placed Succesfully")
  
  this.router.navigate(['/products'])
  
}else{
     this.toastr.error("Please Select the Payment fileld");
  }
}
}
