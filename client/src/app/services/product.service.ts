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
      title: "Artwork",
      image: "http://www.chinadaily.com.cn/life/images/attachement/jpg/site1/20131017/180373d2873013ca56e24a.jpg",
      description: "Lorem fistrum benemeritaar de la pradera al ataquerl se calle ustée. Al ataquerl amatomaa hasta luego Lucas va usté muy cargadoo benemeritaar ahorarr a gramenawer.",
      price: 20
    }, {
      id: 2,
      title: "Obra de arte",
      image: "http://www.chinadaily.com.cn/life/images/attachement/jpg/site1/20131017/180373d2873013ca56e24a.jpg",
      description: "Lorem fistrum benemeritaar de la pradera al ataquerl se calle ustée. Al ataquerl amatomaa hasta luego Lucas va usté muy cargadoo benemeritaar ahorarr a gramenawer.",
      price: 19
    }, {
      id: 3,
      title: "Pepito",
      image: "http://www.chinadaily.com.cn/life/images/attachement/jpg/site1/20131017/180373d2873013ca56e24a.jpg",
      description: "Lorem fistrum benemeritaar de la pradera al ataquerl se calle ustée. Al ataquerl amatomaa hasta luego Lucas va usté muy cargadoo benemeritaar ahorarr a gramenawer.",
      price: 1974
    }, {
      id: 4,
      title: "Artistic",
      image: "http://www.chinadaily.com.cn/life/images/attachement/jpg/site1/20131017/180373d2873013ca56e24a.jpg",
      description: "Lorem fistrum benemeritaar de la pradera al ataquerl se calle ustée. Al ataquerl amatomaa hasta luego Lucas va usté muy cargadoo benemeritaar ahorarr a gramenawer.",
      price: 2008,
    }, {

      id: 5,
      title: "Matadero",
      image: "http://www.chinadaily.com.cn/life/images/attachement/jpg/site1/20131017/180373d2873013ca56e24a.jpg",
      description: "Lorem fistrum benemeritaar de la pradera al ataquerl se calle ustée. Al ataquerl amatomaa hasta luego Lucas va usté muy cargadoo benemeritaar ahorarr a gramenawer.",
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
