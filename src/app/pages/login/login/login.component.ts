import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  pass = false;
  appear = false;
  loginData = {
    email: "",
    password: ""
  }
  users = [
    {
      email: "basil@test.ps",
      password: "1Qa@1233"
    }
  ]
  constructor(private router: Router) { }

  ngOnInit() {
    
  }

  onSubmit(){
    for (let user of this.users){
      if(user.password == this.loginData.password && user.email && this.loginData.password){
        this.pass = true;
        break;
      }

    }
    this.appear = true;
    setTimeout(()=>{
      this.appear = false;
      if(this.pass){
        this.pass = false;
        this.router.navigate(['home']);
      }
      
    },1000);
  }
}
