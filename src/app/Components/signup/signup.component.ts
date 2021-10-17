import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupUserData= {
   username: '',
   password: ''
  };
  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }

  signupUser(){ 
    this.auth.signupUser(this.signupUserData).subscribe((res:any)=>{console.log(res);
    })
    
  }

}
