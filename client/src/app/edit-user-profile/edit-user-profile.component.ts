import { Component, OnInit } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-edit-user-profile',
  templateUrl: './edit-user-profile.component.html',
  styleUrls: ['./edit-user-profile.component.css']
})
export class EditUserProfileComponent implements OnInit {
  formInfo = {
    username:"",
    password:"",
  }
  user: Object;

  constructor(private router: Router, public auth: AuthService) { }

  ngOnInit() {
    // this.user = this.auth.getUser();
    // this.auth.getLoginEventEmitter()
    // .subscribe(user => this.user = user)
  }

  editProfile() {
    const {username, password} = this.formInfo;
  }

}
