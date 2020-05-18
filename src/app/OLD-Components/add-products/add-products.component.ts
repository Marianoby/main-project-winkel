import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  a_name = ""
  a_category = ""
  a_brand = ""
  a_price = ""
  a_quantity=""
  async additem() {
    console.log(this.a_name, this.a_category, this.a_brand, this.a_price,this.a_quantity);
    var payload = {
      item_name: this.a_name,
      category: this.a_category,
      brand: this.a_brand,
      price: this.a_price,
      quantity: this.a_quantity
    }
    var authToken = await window.sessionStorage.getItem('accessToken');
    const httpOptions = {
      headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + authToken
      })
  };
    let a = this.http.post("http://localhost:3000/api/shop/additem", payload).toPromise();
    a.then((Response) => {
      console.log(Response)
    }).catch((err) => {
      console.log(err)
    })
  }
}

