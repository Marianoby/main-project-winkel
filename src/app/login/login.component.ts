import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpParams } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }
l_username=""
l_password=""
login(){
  console.log(this.l_username,this.l_password)
  let params=new HttpParams();
  params=params.append('username',this.l_username);
  params=params.append('password',this.l_password);
  let a=this.http.get("http://localhost:3000/api/login/login",{params:params}).toPromise();
  a.then((responce)=>{
    console.log(responce)
    window.sessionStorage.setItem('user_data', JSON.stringify(responce));


    window.sessionStorage.setItem('accessToken', responce['token']);
    if(responce['type']=="customer"){

      //redirect to user 
      window.location.href='/'
    }
    else if(responce['type']=="shop"){
      //redirect to shop
      window.location.href='/shop'
    }else if(responce['type']=="admin"){
      //redirect to shop
      window.location.href='/admin'
    }
  }).catch((err)=>{
    console.error(err.status, err.error.message)
  })
}
}
