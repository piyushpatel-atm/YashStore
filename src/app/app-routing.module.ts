import { AuthGuard } from './shared/services/guard/auth-guard.service';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './LoginFolder/admin-login/admin-login.component';
import { DashboardComponent } from './LoginFolder/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './LoginFolder/forgot-password/forgot-password.component';
import { SignInComponent } from './LoginFolder/sign-in/sign-in.component';
import { SignUpComponent } from './LoginFolder/sign-up/sign-up.component';
import { VerifyEmailComponent } from './LoginFolder/verify-email/verify-email.component';import { NavbarcompComponent } from './navbarcomp/navbarcomp.component';
import { AdminDashboardComponent } from './AdminCrud/admin-dashboard/admin-dashboard.component';
import { AddItemComponent } from './AdminCrud/add-item/add-item.component';

const routes: Routes = [
  // { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
  { path: 'sign-in', component: SignInComponent },
  { path: 'register-user', component: SignUpComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'verify-email-address', component: VerifyEmailComponent },
  { path: 'adminlogin',component:AdminLoginComponent},
  {path:"",component:NavbarcompComponent},
  {path:"dashboard",component:DashboardComponent},
  {path:"adminDashboard",component:AdminDashboardComponent},
  {path:"additem",component:AddItemComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
