import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './LoginFolder/admin-login/admin-login.component';
import { NavbarcompComponent } from './navbarcomp/navbarcomp.component';
import { AddproductComponent } from './Product/addproduct/addproduct.component';
import { DashboardComponent } from './Product/dashboard/dashboard.component';

const routes: Routes = [
  {path:"adminlogin",component:AdminLoginComponent},
  {path:"",component:NavbarcompComponent},
  {path:"dashboard",component:DashboardComponent},
  {path:"addproduct",component:AddproductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
