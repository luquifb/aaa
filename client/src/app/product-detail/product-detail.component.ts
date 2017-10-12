import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import "rxjs/add/operator/mergeMap";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  productToShow:any
  http;
  BASEURL;
  product;

  constructor(private route: ActivatedRoute,
              private service: ProductService,
              public auth: AuthService,
              private router: Router) {
    this.user = this.auth.getUser();
    this.auth.getLoginEventEmitter()
      .subscribe(user => this.user = user)

    this.route.params
    .mergeMap( p => this.service.getProduct(p.id))
    .subscribe( product => this.productToShow = product)
  }
  user: object;


  ngOnInit() {
  }

  goHome(){
    this.router.navigate(["home"])
  }

  // buy(){
  //   this.router.navigate(["cart"])
  // }

  editProduct(product){
    // this.router.navigate(["product/edit/id"])
    return this.http.put(`${this.BASEURL}/products/edit/${product._id}`, product)
      .map((res) => res.json());
  }

  deleteProduct() {  
    this.service.deleteProduct(this.productToShow._id)
      .subscribe(
        () => this.router.navigate(['/product-list'])
      );
  }

}

