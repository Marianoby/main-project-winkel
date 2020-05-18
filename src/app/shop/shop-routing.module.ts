import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import {ProductListComponent} from './product-list/product-list.component'
import {NewProductComponent} from './new-product/new-product.component'
export const routes: Routes = [

  {
    path: '', component: DashboardComponent, 
    children: [
      {path: '', redirectTo: 'productlist',  pathMatch: 'full'},
      {path: 'productlist', component:ProductListComponent},
      {path: 'newproduct', component:NewProductComponent},
    ]
  }

];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopRoutingModule { }
