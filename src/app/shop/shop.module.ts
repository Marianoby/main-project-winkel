import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductListComponent } from './product-list/product-list.component';
import {SharedModule} from './../shared/shared.module';
import { NewProductComponent } from './new-product/new-product.component'

@NgModule({
  declarations: [DashboardComponent, ProductListComponent, NewProductComponent],
  imports: [
    CommonModule,
    ShopRoutingModule,
    SharedModule
  ],
  
})
export class ShopModule { }
