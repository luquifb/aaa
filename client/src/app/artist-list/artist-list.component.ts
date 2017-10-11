import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-artist-list',
  templateUrl: './artist-list.component.html',
  styleUrls: ['./artist-list.component.css']
})
export class ArtistListComponent implements OnInit {
  products:any
  
  constructor(private prodService:ProductService) { }

  ngOnInit() {
    this.prodService.getProducts()
    .subscribe( allProducts => this.products = allProducts)
  }

}

