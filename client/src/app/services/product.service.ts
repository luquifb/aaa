import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';
import { environment }  from '../../environments/environment';
const  BASE_URL:string= environment.BASEURL;


interface Product {
  id:number,
  title:string,
  description:string,
  image:string,
  price:number
}


@Injectable()
export class ProductService {

  constructor(private http: Http) {
    }

  getProducts(){
    return this.http.get(`${BASE_URL}/products/all-products`)
          .map(res => res.json())
  }

  getProduct(id){
    return this.http.get(`${BASE_URL}/products/:id`)
          .map(res => res.json())
  }

  newProduct(product) {
    return this.http.post(`${BASE_URL}/products/create-product`, product )
          .map(res => res.json())
  }

}
