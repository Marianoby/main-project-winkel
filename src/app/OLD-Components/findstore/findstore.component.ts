import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpParams } from '@angular/common/http';
@Component({
  selector: 'app-findstore',
  templateUrl: './findstore.component.html',
  styleUrls: ['./findstore.component.css']
})
export class FindstoreComponent implements OnInit {
shoplist: any = []
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }

shop={}
findshop(f_type){
  console.log(f_type)
  let params=new HttpParams();
  params=params.append('type',f_type);
  let s=this.http.get("http://localhost:3000/findshop",{params:params}).toPromise();
  s.then((shoplist)=>{
    console.log(shoplist)
    this.shoplist=shoplist['shoplist'];
  }).catch((err)=>{
    console.log(err)
  })
}
}
