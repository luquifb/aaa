import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-work-on-paper-category',
  templateUrl: './work-on-paper-category.component.html',
  styleUrls: ['./work-on-paper-category.component.css']
})
export class WorkOnPaperCategoryComponent implements OnInit {
  products:any

  constructor(private prodService:ProductService) { }

  ngOnInit() {
    this.prodService.getProducts()
    .subscribe( allProducts => this.products = allProducts)
  }

}
