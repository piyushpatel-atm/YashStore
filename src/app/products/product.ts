export interface Product {
    id:string;
    categoryId:string;
    productName:string;
    description:string;
    rating:string;
    price:number;
    quantity:number;
    productImg:string;  
    isAvailble:boolean;
 
}
export class cartProduct {
    id!:string;
    categoryId!:string;
    productName!:string;
    description!:string;
    rating!:string;
    price!:number;
    productImg!:string;  
    isAvailble!:boolean;
    email!:string;
    quantity!:number
 
}
