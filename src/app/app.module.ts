import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './materiL-module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarcompComponent } from './navbarcomp/navbarcomp.component';
import { AdminLoginComponent } from './LoginFolder/admin-login/admin-login.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdminRegisterComponent } from './LoginFolder/admin-register/admin-register.component';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './Product/dashboard/dashboard.component';
import { AddproductComponent } from './Product/addproduct/addproduct.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarcompComponent,
    AdminLoginComponent,
    AdminRegisterComponent,
    DashboardComponent,
    HeaderComponent,
     FooterComponent,
     AddproductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,MaterialModule,FormsModule,ReactiveFormsModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
