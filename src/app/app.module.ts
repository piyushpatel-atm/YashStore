import { AuthService } from './shared/services/auth.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './material-module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarcompComponent } from './navbarcomp/navbarcomp.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { enviroment } from 'src/enviroments/enviroments';
// import { FooterComponent } from './shared/layouts/footer/footer.component';
// import { HeaderComponent } from './shared/layouts/header/header.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PageNotFoundErrorComponent } from './shared/layouts/page-not-found-error/page-not-found-error.component';
import { SignInComponent } from './LoginFolder/sign-in/sign-in.component';
import { SignUpComponent } from './LoginFolder/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './LoginFolder/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './LoginFolder/verify-email/verify-email.component';
import { DashboardComponent } from './LoginFolder/dashboard/dashboard.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductModuleModule } from './product-module/product-module.module';
import { AdminRegisterComponent } from './LoginFolder/admin-register/admin-register.component';

import { AdminDashboardComponent } from './AdminCrud/admin-dashboard/admin-dashboard.component';
import { AddItemComponent } from './AdminCrud/add-item/add-item.component';
import { MatIconModule } from '@angular/material/icon';
import { LoginAdminComponent } from './AdminCrud/login-admin/login-admin.component';
import { AllCategoryComponent } from './AdminCrud/all-category/all-category.component';
import { UpdateItemComponent } from './AdminCrud/update-item/update-item.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarcompComponent,
    FooterComponent,
    HeaderComponent,
    PageNotFoundErrorComponent,
    SignInComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    DashboardComponent
    DashboardComponent,
    DashboardComponent,
    HeaderComponent,
     FooterComponent,
     AdminDashboardComponent,
     AddItemComponent,
     LoginAdminComponent,
     AllCategoryComponent,
     UpdateItemComponent,
    

  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,MaterialModule,FormsModule,ReactiveFormsModule,HttpClientModule,
    AngularFireModule.initializeApp(enviroment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,MaterialModule,MatIconModule
  ],

  imports:[
      BrowserModule,
      AppRoutingModule,
      BrowserAnimationsModule,MaterialModule,FormsModule,ReactiveFormsModule,HttpClientModule,
      AngularFireModule.initializeApp(enviroment.firebase),
      AngularFireAuthModule,
      AngularFirestoreModule,
      AngularFireStorageModule,
      AngularFireDatabaseModule,
      ProductModuleModule,
      HttpClientModule
    ],

  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
