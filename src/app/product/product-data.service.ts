import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductDataService {

  url: string = environment.url + 'product/';

  getAllproduct() {
    return this._http.get(this.url);
  }
  getproductByID(product_id) {
    return this._http.get(this.url + product_id);
  }
  deleteproduct(product_id) {
    let x = new HttpHeaders().set(environment.header, environment.value);
    return this._http.delete(this.url + product_id, { headers: x });
  }
  addproduct(item) {
    console.log(item);
    let x = new HttpHeaders().set(environment.header, environment.value);
    let body = JSON.stringify(item);
    return this._http.post(this.url, body, { headers: x });
  }
  updateproduct(item) {
    let x = new HttpHeaders().set(environment.header, environment.value);
    let body = JSON.stringify(item);

    return this._http.put(this.url + item.product_id, body, { headers: x });
  }

  constructor(private _http: HttpClient) { }
}
