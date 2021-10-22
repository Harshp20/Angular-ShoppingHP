import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // userLoginData={
  //   username: '',
  //   password: ''
  // }

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  login(user:any){
    this.auth.login(user).subscribe((res:any)=>{
      if(res)
        this.router.navigate(['/groceries']);
      else
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
