import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { environment } from '../../environments/environment';

const BASEURL:string = environment.BASEURL + "/products";

@Injectable()
export class CartService {
  products: Array<Object> = [
    {title: "", price: ""}
  ];

  constructor(private http: Http) { }

  // getList(): Array<Object> {
  //   return this.products;
  // }

  // addProductToCart() {
  //   var b = {
  //     title: alpha,
  //     price: beta
  //   }
  //   this.products.push(b)
  // }

}


  //   this.products(title, price)
  //         .map(res => res.json())  
