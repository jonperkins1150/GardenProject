import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './classes/product';

import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<any>{
    return this.http.get("https://efa-gardenapp-backend.herokuapp.com/api/product")
  }
}
