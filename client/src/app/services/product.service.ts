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
export class Product {
  products: Array<Product> =  [ {
      productId: 1,
      title: "The Shawshank Redemption",
      description: "bla bla bla",
      price: 20,
      image: "https://i.imgur.com/SuW2ZlC.jpg"
    }, {
      productId: 2,
      title: "fbrfdbfbrfb",
      description: "bla2 bla2 bla2",
      price: 30,
      image: "https://i.imgur.com/SuW2ZlC.jpg"
    }, {
      productId: 3,
      title: "fbdfbfd",
      description: "bla3 bla3 bla3",
      price: 40,
      image: "https://i.imgur.com/SuW2ZlC.jpg"
    }
  ];

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
