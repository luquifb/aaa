import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers: [ProductService]
})
export class ProductsComponent implements OnInit {
  products: Array<Object>;

  constructor(public service: ProductService) { }

  ngOnInit() {
    this.products = this.service.getProducts();
  }

}
