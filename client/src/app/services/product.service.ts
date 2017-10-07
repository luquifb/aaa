import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { environment }  from '../../environments/environment';
// const  BASE_URL:string= environment.BASEURL;

const BASEURL = environment.BASEURL + "/products";


@Injectable()
export class ProductService {
product:object;

  constructor(private http: Http) {
    }

  getProducts(){
    return this.http.get(`${BASEURL}/all-products`)
          .map(res => res.json())
  }

  getProduct(id){
    return this.http.get(`${BASEURL}/${id}`)
          .map(res => res.json())
  }

  newProduct(title, price) {
    return this.http.post(`${BASEURL}/create-product`, {title, price} )
          .map(res => res.json())
  }

}
