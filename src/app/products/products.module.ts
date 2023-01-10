import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { ViewAllComponent } from './view-all/view-all.component';
import {MatToolbarModule} from '@angular/material/toolbar'; 
import { MaterialModule } from '../material-module';

import { ViewProductByCategoryComponent } from './view-product-by-category/view-product-by-category.component';
import { MatIconModule } from '@angular/material/icon';




@NgModule({
  declarations: [
    ProductsComponent,
    ViewProductComponent,
    ViewAllComponent,
    ViewProductByCategoryComponent,
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    MatInputModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatIconModule,
    MaterialModule,
    
  ],
  exports:[
    ViewProductComponent,
    ViewAllComponent,
    ViewProductByCategoryComponent]
})
export class ProductsModule { }
