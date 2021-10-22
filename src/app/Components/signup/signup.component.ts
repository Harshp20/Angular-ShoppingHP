import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  userData= {
   username: '',
   password: ''
  };
  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  signupUser(){
    this.auth.signupUser(this.userData).subscribe((res:any)=>{
      if(res)
        console.log('Success');
      else
        console.log('Wrong');
    });
  }
  
}
