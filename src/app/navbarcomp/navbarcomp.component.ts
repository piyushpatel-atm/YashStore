import { Component } from '@angular/core';

@Component({
  selector: 'app-navbarcomp',
  templateUrl: './navbarcomp.component.html',
  styleUrls: ['./navbarcomp.component.css']
})
export class NavbarcompComponent {
  cart:string[]=[];
  array:string[]=["https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/71jDgbvJQCL._AC_SY200_.jpg","https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/71nEPUH6CBS._AC_SY200_.jpg",
  "https://images.unsplash.com/photo-1618424181497-157f25b6ddd5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bGFwdG9wJTIwY29tcHV0ZXJ8ZW58MHx8MHx8&w=1000&q=80",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoZDGup6hEECnlnD9RsH2Ciux_RQQMnIX1WmWWcAW8&s","https://media.istockphoto.com/id/1293762741/photo/modern-living-room-interior-3d-render.jpg?s=612x612&w=0&k=20&c=iZ561ZIXOtPYGSzqlKUnLrliorreOYVz1pzu8WJmrnc="]
  add(value:string){
    console.log(value)
    this.cart.push(value);
  }
}
