import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

interface LoginForm{
  username:string;
  password:string;
}

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnInit {
  formInfo:LoginForm = {
    username: "",
    password: ""
  };

  constructor(public auth:AuthService, private router: Router) { }

  ngOnInit() {
  }

  login(){
    const {username, password} = this.formInfo;
    if(username != "" && password != ""){
      this.auth.login(username, password)
      .map(user => console.log(user))
      .subscribe(
        () => this.router.navigate(['/user'])
      );

    } else{
      console.log("You must set a username and a password");
    }
  }

}
