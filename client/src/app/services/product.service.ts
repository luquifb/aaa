import { Injectable } from '@angular/core';


interface Product {
  id:number,
  title:string,
  description:string,
  image:string,
  price:number
}



@Injectable()
export class ProductService {
  products:Array<Product> = [
    {
      id: 1,
      title: "The Shawshank Redemption",
      image: "http://www.chinadaily.com.cn/life/images/attachement/jpg/site1/20131017/180373d2873013ca56e24a.jpg",
      description: "In 1947, Andy Dufresne (Tim Robbins), a banker in Maine, is convicted of murdering his wife and her lover, a golf pro. Since the state of Maine ha",
      price: 20
    }, {
      id: 2,
      title: "The Godfather",
      image: "http://www.chinadaily.com.cn/life/images/attachement/jpg/site1/20131017/180373d2873013ca56e24a.jpg",
      description: "In late summer 1945, guests are gathered for the wedding reception of Don Vito Corleone's daughter Connie (Talia Shire) and Carlo Rizzi (Gianni Ru",
      price: 19
    }, {
      id: 3,
      title: "The Godfather Part II",
      image: "http://www.chinadaily.com.cn/life/images/attachement/jpg/site1/20131017/180373d2873013ca56e24a.jpg",
      description: "The Godfather Part II presents two parallel storylines. One involves Mafia chief Michael Corleone in 1958/1959 after the events of the first movie",
      price: 1974
    }, {
      id: 4,
      title: "The Dark Knight",
      image: "http://www.chinadaily.com.cn/life/images/attachement/jpg/site1/20131017/180373d2873013ca56e24a.jpg",
      description: "The movie begins with a gang of men with clown masks breaking into the bank where the mob has a large portion of their money stashed. It begins with five cl...",
      price: 2008,
    }, {

      id: 5,
      title: "Schindler's List",
      image: "http://www.chinadaily.com.cn/life/images/attachement/jpg/site1/20131017/180373d2873013ca56e24a.jpg",
      description: "The relocation of Polish Jews from surrounding areas to Krakow begins in late 1939, shortly after the outbreak of World War II, when the German Army defeats...",
      price: 1993,
    }
  ]

  getProducts(){
    return this.products
  }

  getProduct(id){
    return this.products[id]
  }

}
