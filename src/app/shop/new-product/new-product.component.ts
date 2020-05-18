import { Component, OnInit } from '@angular/core';
import { ApiCallService } from './../../service/api-call.service';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {

  constructor(private variable: ApiCallService) { }

  ngOnInit(): void {
  }

  a_name = ""
  a_category = ""
  a_brand = ""
  a_price = ""
  a_quantity = ""
  async additem() {
    console.log(this.a_name, this.a_category, this.a_brand, this.a_price, this.a_quantity);
    var payload = {
      item_name: this.a_name,
      category: this.a_category,
      brand: this.a_brand,
      price: this.a_price,
      quantity: this.a_quantity
    }
    
    let a = this.variable.postRequest('shop/additem', payload)
    a.then((Response) => {
      console.log(Response)
      window.location.href='shop/productlist'
    }).catch((err) => {
      console.log(err)
    })
  }

}
