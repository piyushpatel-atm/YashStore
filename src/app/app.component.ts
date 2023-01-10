import { Component, Input, NgModule, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from './products/category';
import { ProductService } from './products/product.service';
import { ProductsComponent } from './products/products.component';
import { Route, Router } from '@angular/router';
import { AuthService } from './shared/services/auth.service';
import { UserService } from './shared/user.service';
import { UserForm } from './shared/data-type';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ProductsComponent],
})
export class AppComponent implements OnInit {
  title = 'yashStore';
  searchCategory!: string;
  categoryList!: Category[];

  screenHeight: any = window.innerHeight;
  screenWidth: any = window.innerWidth;
  footerMaxHeight: number = this.screenHeight - 130;

  // console.log(this.screenHeight, this.screenWidth);
  //header and footer aprox

  userName: string | undefined;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productsService: ProductService,
    public authService: AuthService,
    public userService: UserService
  ) {}
  ngOnInit(): void {
    this.productsService.getCategory().subscribe((data) => {
      this.categoryList = data;
    });

    console.warn(this.authService.isAdminLogin);
    if (this.authService.isLoggedIn) {
      let userStore = localStorage.getItem('user');

      let userData = userStore && JSON.parse(userStore);

      console.warn(userData.email);
      this.userService.GetUser(userData.email).subscribe((result: any) => {
        if (result && result.length == 0) {
          this.userName = userData.displayName;
          let uPost: any = {
            name: userData.displayName,
            email: userData.email,
            password: '',
            mob: '',
          };
          this.userService.UserPost(uPost).subscribe((result) => {
            console.log(result);
          });
        } else {
          console.warn(result);
          this.userName = result[0].name;
        }
      });
    }
  }
}
