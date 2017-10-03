import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-signupform',
  templateUrl: './signupform.component.html',
  styleUrls: ['./signupform.component.css']
})
export class SignupformComponent implements OnInit {
formInfo = {
  username:"",
  password:"",
  name:"",
  pic_path:"",
  email :"",
  role:""
}
  constructor(public auth:AuthService) { }

  ngOnInit() {
  }

  signup(){
    const {username, password, name, email, pic_path, role} = this.formInfo;
    if(username != "" && password != ""){
      this.auth.signup(username, password, name, email, pic_path, role)
      .map(user => console.log(user))
      .subscribe();
    } else{
      console.log("You must set a username and a password");
    }
  }

}
