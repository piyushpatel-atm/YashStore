import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products.component';
import { ViewAllComponent } from './view-all/view-all.component';
import { ViewProductByCategoryComponent } from './view-product-by-category/view-product-by-category.component';
import { ViewProductComponent } from './view-product/view-product.component';

const routes: Routes = [
  { path: '', component: ViewAllComponent },
  { path: 'products', component: ProductsComponent},
  { path: 'view-all', component: ViewAllComponent },
  { path: 'view-product/:id', component: ViewProductComponent },
  { path: 'view-product-by-category/:id', component: ViewProductByCategoryComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
