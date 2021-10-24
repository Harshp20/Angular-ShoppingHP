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
      if(res == true)
        this.router.navigate(['/groceries']);
      else if(res == -1){
        console.log('User doesn\'t exist. Sign up!')
      }
      else if(res === -2)
      console.log('Incorrect password');
      else
      console.log('Error occured');
      
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
