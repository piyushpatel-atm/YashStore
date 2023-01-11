export interface User {
  uid: string;
  email: string;
  displayName: string;
  photoURL: string;
  emailVerified: boolean;
}

export interface LoginUser{
  email:string,
  password:string
}
export interface itemmodule {
  productId: string;
  price: string;
  categoryId: string;
  productName: string;
  description: string;
  rating: string;
  productImg: string;
  isAvailble: boolean;
}

export class UserForm {
  id!: number;

  name!: string;

  email!: string;

  password!: string;

  mob!: string;
}
