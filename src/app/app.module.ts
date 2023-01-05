import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './materiL-module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarcompComponent } from './navbarcomp/navbarcomp.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarcompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
