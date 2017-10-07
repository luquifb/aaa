import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})

export class ProductListComponent implements OnInit {
products:any
  constructor(private service:ProductService,
              private auth: AuthService) { }


  ngOnInit() {
    this.service.getProducts()
      .subscribe( allProducts => this.products = allProducts)
  }

  addToCart(id) {
    this.auth.update(id)
    .subscribe( res => console.log(res.cart))
  }

}
