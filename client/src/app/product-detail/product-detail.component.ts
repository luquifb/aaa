import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  productId:any
  productToShow:Object

  constructor(private route:ActivatedRoute, private service:ProductService, private router:Router) { }


  ngOnInit() {
    this.service.getProduct(this.productId)
      .subscribe( productDetail => this.productToShow = productDetail)
    }

  goHome(){
    this.router.navigate(["home"])
  }

  buy(){
    this.router.navigate(["cart"])
  }

  bet(){
    // this.router.navigate(["product/id"])
  }

  editProduct(){
    // this.router.navigate(["product/edit/id"])
  }
}
