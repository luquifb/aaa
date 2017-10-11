import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';
import { FileUploader} from "ng2-file-upload";
import { environment }  from '../../environments/environment';

const BASEURL:string = environment.BASEURL + "/products/create-product";

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})

export class ProductCreateComponent implements OnInit {
  uploader: FileUploader = new FileUploader({
    url: BASEURL
  });

  
  products: any;
  newProd = {
    title:"",
    price:"",
    artist: "",
    description: "",
    category: "",
    image: ""
  };

  feedback: string;

  constructor(
    public service: ProductService,
    private router: Router) {      
    }

  ngOnInit() {
    this.service.getProducts().subscribe( products => {
      this.products = products
    })
    this.uploader.onSuccessItem = (item, response) => {
      this.feedback = JSON.parse(response).message;
    };

    this.uploader.onErrorItem = (item, response, status, headers) => {
      this.feedback = JSON.parse(response).message;
    };
  }

  addProduct(title, price, artist, description, category, image) {
    // const {title, price, artist, description, category, image} = this.newProd;
    // this.service.newProduct(title, price, category, artist, description, image)

    this.uploader.onBuildItemForm = (item, form) => {
      form.append('title', this.newProd.title);
      form.append('price', this.newProd.price);
      form.append('artist', this.newProd.artist);
      form.append('description', this.newProd.description);
      form.append('category', this.newProd.category);
    };
        console.log("entro el form")
        this.uploader.uploadAll();
        this.uploader.onCompleteItem = (res) => this.service.newProduct(title, price, artist, description, category, image)
        .map(product => console.log(product))
        .subscribe(
          () => {
            console.log("SUSCRIBE")
            this.router.navigate(['/product-list'])
          }
        );

  }

}
