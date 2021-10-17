import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }

  login(event: any){
    event.preventDefault();
    const target = event.target;
    const username = target.querySelector('#username').value
    const password = target.querySelector('#password').value

    let userData= { username, password}
    
    console.log(username, password);
    
    
  }

}
