import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userLoginData={
    username: '',
    password: ''
  }

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }

  login(){
    this.auth.login(this.userLoginData).subscribe((res:any)=>{
      console.log(res);
      
    })
  }

  // login(event: any){
  //   event.preventDefault();
  //   const target = event.target;
  //   const username = target.querySelector('#username').value
  //   const password = target.querySelector('#password').value
  //   console.log(username, password);
  // }

}
