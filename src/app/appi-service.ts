import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppiService {
  constructor(private http: HttpClient) {}
  getallproducts() {
    return this.http.get('https://fakestoreapi.com/products');
  }
  getproductdetails(id: any) {
    return this.http.get(`https://fakestoreapi.com/products/${id}`);
  }
}