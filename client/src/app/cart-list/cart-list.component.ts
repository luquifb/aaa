import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {
  products:any;

  constructor(private service:CartService) {
 
   }

  ngOnInit() {
    // this.service.addProductToCart()
    //   .subscribe( addToCart => this.products = addToCart)
  }

}
