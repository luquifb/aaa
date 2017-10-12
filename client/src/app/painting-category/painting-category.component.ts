import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-painting-category',
  templateUrl: './painting-category.component.html',
  styleUrls: ['./painting-category.component.css']
})
export class PaintingCategoryComponent implements OnInit {
  products:any

  constructor(private prodService:ProductService) { }

  ngOnInit() {
    this.prodService.getProducts()
    .subscribe( allProducts => this.products = allProducts)
  }

}
