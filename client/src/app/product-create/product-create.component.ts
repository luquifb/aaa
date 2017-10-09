import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})

export class ProductCreateComponent implements OnInit {
  products: any;
  newProd = {
    title:"",
    price:"",
    artist: "",
    description: "",
    category: ""
  };


  constructor(
    public service: ProductService,
    private router: Router) {}

  ngOnInit() {
    this.service.getProducts().subscribe( products => {
      this.products = products
    })
  }

  addProduct() {
    console.log("nuevo producto" + this.newProd)
    const {title, price, artist, description, category} = this.newProd;
    this.service.newProduct(title, price, category, artist, description)
    .map(product => console.log(product))
    .subscribe(
      () => this.router.navigate(['/products'])
    );
  }
}
