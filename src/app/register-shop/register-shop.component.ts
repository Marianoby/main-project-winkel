import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-register-shop',
  templateUrl: './register-shop.component.html',
  styleUrls: ['./register-shop.component.css']
})
export class RegisterShopComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  s_name = ""
  s_address = ""
  s_phone = ""
  s_email = ""
  s_type=""
  s_username = ""
  s_password = ""
  register() {
    console.log(this.s_name, this.s_address, this.s_phone, this.s_email,this.s_type, this.s_username, this.s_password);
    var payload = {
      name: this.s_name,
      address: this.s_address,
      phone: this.s_phone,
      email: this.s_email,
      type: this.s_type,
      username: this.s_username,
      password: this.s_password
    }
    let a = this.http.post("http://localhost:3000/api/public/shopregister", payload).toPromise();
    a.then((Response) => {
      console.log(Response)
      window.location.href='/login'
    }).catch((err) => {
      console.log(err)
    })
  }
}
