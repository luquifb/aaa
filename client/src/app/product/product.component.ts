import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product: object;

  constructor(public service: ProductService) { }

  ngOnInit() {
    // this.product = this.service.getProduct();

  }

}
