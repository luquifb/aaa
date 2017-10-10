import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})

export class ProductListComponent implements OnInit {
products:any

  constructor(private prodService:ProductService, private cartService: CartService) { }

  ngOnInit() {
    this.prodService.getProducts()
      .subscribe( allProducts => this.products = allProducts)
  }

  getProductData(product){
    console.log(this.products)
    // this.prodService.getProduct(this.products.id)
    // .subscribe(productData => this.products = productData)
    // const selectedIds = this.products.map(({ id }) => id);
    // console.log(selectedIds);
  }

}


