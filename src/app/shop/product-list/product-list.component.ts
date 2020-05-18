import { Component, OnInit } from '@angular/core';
import { ApiCallService } from './../../service/api-call.service';
import { format } from 'path';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(private variable: ApiCallService) { }

  ngOnInit(): void {
  }
  p_id=""
  async productlist() {
    console.log(this.p_id)
    var payload = {
      id:this.p_id
    }
    
    let a = this.variable.postRequest('shop/productlist', payload)
    a.then((productlist) => {
      console.log(productlist)
      this.productlist=productlist['shoplist'];
    }).catch((err) => {
      console.log(err)
    })
  }
}
