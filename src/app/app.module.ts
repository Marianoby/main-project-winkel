import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import {SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {HttpClientModule} from '@angular/common/http';
import { RegisterShopComponent } from './register-shop/register-shop.component';
import { RegisterCustomerComponent } from './register-customer/register-customer.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterShopComponent,
    RegisterCustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
