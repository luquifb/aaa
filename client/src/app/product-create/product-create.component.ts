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
  newProduct: Object = {
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
    console.log("nuevo producto" + this.newProduct)
    this.products.newProduct(this.newProduct)
    .map(product => console.log(product))
    .subscribe(
      () => this.router.navigate(['/products'])
    );
  }
}
