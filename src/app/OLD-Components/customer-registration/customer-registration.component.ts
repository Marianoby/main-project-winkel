import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
@Component({
  selector: 'app-customer-registration',
  templateUrl: './customer-registration.component.html',
  styleUrls: ['./customer-registration.component.css']
})
export class CustomerRegistrationComponent implements OnInit {


  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  r_name = ""
  r_address = ""
  r_phone = ""
  r_email = ""
  r_username = ""
  r_password = ""
  register() {
    console.log(this.r_name, this.r_address, this.r_phone, this.r_email, this.r_username, this.r_password);
    var payload = {
      name: this.r_name,
      address: this.r_address,
      phone: this.r_phone,
      email: this.r_email,
      username: this.r_username,
      password: this.r_password
    }
    let a = this.http.post("http://localhost:3000/api/public/register", payload).toPromise();
    a.then((Response) => {
      console.log(Response)
      alert("Registration successfull")
      window.location.href=''
    }).catch((err) => {
      console.log(err)
    })
  }
}
