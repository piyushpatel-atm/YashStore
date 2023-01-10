import { AuthGuard } from './shared/services/guard/auth-guard.service';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './LoginFolder/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './LoginFolder/forgot-password/forgot-password.component';
import { SignInComponent } from './LoginFolder/sign-in/sign-in.component';
import { SignUpComponent } from './LoginFolder/sign-up/sign-up.component';
import { ListOrderComponent } from './product-module/list-order/list-order.component';
import { VerifyEmailComponent } from './LoginFolder/verify-email/verify-email.component';
import { AdminDashboardComponent } from './AdminCrud/admin-dashboard/admin-dashboard.component';
import { AddItemComponent } from './AdminCrud/add-item/add-item.component';

import { LoginAdminComponent } from './AdminCrud/login-admin/login-admin.component';
import { AllCategoryComponent } from './AdminCrud/all-category/all-category.component';
import { UpdateItemComponent } from './AdminCrud/update-item/update-item.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ViewProductByCategoryComponent } from './products/view-product-by-category/view-product-by-category.component';
import { CartModuleComponent } from './cart-module/cart-module/cart-module.component';
import { CheckoutComponent } from './BillingModule/checkout/checkout.component';


const routes: Routes = [
  { path: '', redirectTo: '/products', pathMatch: 'full' },
  { path: 'sign-in', component: SignInComponent },
  { path: 'register-user', component: SignUpComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'verify-email-address', component: VerifyEmailComponent },
  //{ path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) ,canActivate:[AuthGuard]},
  { path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) },
  {path:'order', component:ListOrderComponent},
  {path:"dashboard",component:DashboardComponent},
  {path:"adminDashboard",component:AdminDashboardComponent},
  {path:"additem",component:AddItemComponent},
  {path:"Loginadmin",component:LoginAdminComponent},
  {path:"category",component:AllCategoryComponent},
  {path:"updateItem/:id",component:UpdateItemComponent},
  {path:"cartItem",component:CartModuleComponent,canActivate:[AuthGuard]},
  {path:"Checkout",component:CheckoutComponent}
  // {path:"products/view-product-by-category/:id",component:ViewProductByCategoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
