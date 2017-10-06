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
  constructor(private myService:ProductService) { }


  ngOnInit() {
    this.myService.getProducts()
      .subscribe( allProducts => this.products = allProducts)
  }

}
