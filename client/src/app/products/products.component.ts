import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products: Array<object>;

  constructor(public service: ProductService) { }

  ngOnInit() {
    this.products = this.service.getProducts();
  }

}
