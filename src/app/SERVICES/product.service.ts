import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// CREATE A MODEL FOR PRODUCTS
// import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'API_ENDPOINT/products';

  constructor(private http: HttpClient) { }

  // CREATE A MODEL FOR PRODUCTS
  // getProducts(): Observable<Product[]> {
  //   return this.http.get<Product[]>(this.apiUrl);
  // }
}
