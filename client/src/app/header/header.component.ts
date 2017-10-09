import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import {IsLoggedInService} from '../services/isLoggedIn.canactivate.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  constructor(public auth:AuthService, private router: Router) { }

  ngOnInit() {
  }

}
