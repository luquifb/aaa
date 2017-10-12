import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-photography-category',
  templateUrl: './photography-category.component.html',
  styleUrls: ['./photography-category.component.css']
})
export class PhotographyCategoryComponent implements OnInit {
  products:any

  constructor(private prodService:ProductService) { }

  ngOnInit() {
    this.prodService.getProducts()
    .subscribe( allProducts => this.products = allProducts)
  }

}
