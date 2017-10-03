import { Injectable } from '@angular/core';

export class Product {
  constructor(
    public productId:number,
    public title:string,
    public description: string,
    public price:number,
    public image:string
    ){
  }
}

@Injectable()
export class ProductService {
  products: Array<Product> =  [];

  constructor() { }

  getProducts() {
    return this.products
    }

  getProduct(id:number): any {
    return this.products.forEach( product => {
       if(product.productId === id) return product;
       });
    }

}
