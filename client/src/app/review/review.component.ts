import { Component, OnInit } from '@angular/core';
import { ReviewService } from '../services/review.service';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})

export class ReviewComponent implements OnInit {
  reviews:any
  constructor(private service:ReviewService,
              private auth: AuthService) { }


  ngOnInit() {
    this.service.getReviews()
      .subscribe( allReviews => {
        this.reviews = allReviews 
        
        console.log(this.reviews)
        
      })
  }


}
