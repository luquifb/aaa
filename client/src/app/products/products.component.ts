import { Component, OnInit } from '@angular/core';
import { Product } from '../services/product.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers: [Product]
})
export class ProductsComponent implements OnInit {
  products: Array<Object>;

  constructor(public service: Product) { }

  ngOnInit() {
    this.products = this.service.getProducts();
  }

}
