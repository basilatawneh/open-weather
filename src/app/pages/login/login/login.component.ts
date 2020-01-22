import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginData = {
    email: "",
    password: ""
  }
  users = [
    {
      email: "basil@test.ps",
      password: "12345678"
    }
  ]
  constructor(private router: Router) { }

  ngOnInit() {
    
  }

  onSubmit(){
    for (let user of this.users){
      if(user.password == this.loginData.password && user.email && this.loginData.password){
        this.router.navigate(['home']);
      }

    }
  }
}
