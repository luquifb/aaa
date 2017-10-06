import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})

export class ProductListComponent implements OnInit {
products:any
  constructor(private service:ProductService) { }


  ngOnInit() {
    this.service.getProducts()
      .subscribe( allProducts => this.products = allProducts)
  }

}
