import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  // userData= {
  //  username: '',
  //  password: ''
  // };
  
  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  signupUser(user: any){
    this.auth.signupUser(user).subscribe((res:any)=>{
      if(res == true){
        console.log('Success');
        this.router.navigate(['/login']);
      }
      else if(res === -1)
        console.log('User already exists');
      else
      console.log('Error occured while signing up');
      
    });
  }
  
}
