import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CustomerDataService {
  url:string=environment.url+'customer/';
  constructor(private _http:HttpClient) { }
  getAllcustomer() {
    return this._http.get(this.url);
  }
  getcustomerByEmail(customer_email){
    return this._http.get(this.url+customer_email);
  }
  deletecustomer(customer_id) {
    let x = new HttpHeaders().set(environment.header, environment.value);
    return this._http.delete(this.url + customer_id, { headers: x });
  }
  addcustomer(item) {
    console.log(item);
    let x = new HttpHeaders().set(environment.header, environment.value);
    let body = JSON.stringify(item);
    return this._http.post(this.url, body, { headers: x });
  }
  updatecustomer(item) {
    let x = new HttpHeaders().set(environment.header, environment.value);
    let body = JSON.stringify(item);

    return this._http.put(this.url + item.customer_id, body, { headers: x });
  }
}
