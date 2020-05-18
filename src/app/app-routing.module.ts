import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import {RegisterShopComponent } from './register-shop/register-shop.component';
import {RegisterCustomerComponent} from './register-customer/register-customer.component';
import {AdminModule} from './admin/admin.module';
import {ShopModule} from './shop/shop.module';
import {CustomerModule} from './customer/customer.module';

export const routes: Routes = [
  {path: 'login', component:LoginComponent},
  {path: 'register/user', component:RegisterCustomerComponent},
  {path: 'register/shop', component:RegisterShopComponent},
  {path: 'admin', loadChildren :()=>AdminModule},
  {path: 'shop', loadChildren :()=>ShopModule},
  {path: '', loadChildren :()=>CustomerModule},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
