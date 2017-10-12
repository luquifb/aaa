import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-art-category',
  templateUrl: './art-category.component.html',
  styleUrls: ['./art-category.component.css']
})
export class ArtCategoryComponent implements OnInit {
  products:any

  constructor(private prodService:ProductService) { }

  ngOnInit() {
    this.prodService.getProducts()
    .subscribe( allProducts => this.products = allProducts)
  }

}
