import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {
  products:any

  constructor(private service:ProductService,
              private auth: AuthService) { }

  ngOnInit() {
    // this.service.addProductToCart()
    //   .subscribe( addToCart => this.products = addToCart)
  }

}
