import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  products: Object[];
  newProduct: Object = {};


  constructor() {
    this.products = this.products;
  }

  ngOnInit() {
    this.products = this.products;
  }

  addProduct() {
    this.products.push(this.newProduct);
    this.newProduct = {};
  }
}
