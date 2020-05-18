import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {
  url: String = "http://localhost:3000/api/"

  getRequest = async (url_string) => {
    let a = await this.http.get(this.url + url_string).toPromise();
    return a
  }

  postRequest = async (url_string, params) => {

    var authToken = await window.sessionStorage.getItem('accessToken');
    console.log(authToken);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Bearer '+authToken
      })
    };

    let a = await this.http.post(this.url + url_string, params,httpOptions).toPromise();
    return a
  }

  constructor(private http: HttpClient) {
  }
}
