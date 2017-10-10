import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  products:any
  
  constructor(private service:ProductService) { }

  ngOnInit() {
    this.service.getProducts()
    .subscribe( allProducts => this.products = allProducts)
  }

}
