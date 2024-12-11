import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl="http://localhost:5064/api/Product"
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  addProduct(product:any):Observable<any>{ // here we are passing Product model/class object 
  return  this.http.post(baseUrl+'/Create',product);
  }
  getAll():Observable<Product[]>{ //we are mentioning Product [] - because it's array list of Json response in .net program output
   return this.http.get<Product[]>(baseUrl+'/GetAll');
  }
  getById(id:any):Observable<Product>{
    return this.http.get<Product>(baseUrl+'/GetProductById?id='+id);
  }
}
