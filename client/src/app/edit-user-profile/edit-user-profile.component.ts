import { Component, OnInit } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

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
  constructor(private router: Router) { }

  ngOnInit() {
  }

  editProfile() {
    const {username, password} = this.formInfo;

  }

}
