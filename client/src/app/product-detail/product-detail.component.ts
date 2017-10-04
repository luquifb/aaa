import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
  providers:[ProductService]
})
export class ProductDetailComponent implements OnInit {
  productId:any
  productToShow:Object
  constructor(private route:ActivatedRoute, private service:ProductService, private router:Router) { }
  myProducts = this.service.products

  ngOnInit() {
    this.route.params
        .subscribe((params)=>this.productId = params['id'])


  this.productToShow =this.service.getProduct(this.productId-1 )
  console.log(this.productToShow)
  }

  goHome(){
    this.router.navigate(["home"])
  }
  buy(){
    this.router.navigate(["cart"])
  }

  bet(){
    this.router.navigate(["product/id"])
  }

}
