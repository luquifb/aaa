import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { environment }  from '../../environments/environment';

const BASEURL:string = environment.BASEURL + "/reviews";

@Injectable()
export class ReviewService {
  review:object;
  
  constructor(private http: Http) { }

  getReviews(){
    return this.http.get(`${BASEURL}/all-reviews`)
          .map(res => res.json())
  }
}
