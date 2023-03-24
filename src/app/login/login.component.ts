import { Component, OnInit } from '@angular/core';
import { SignupService } from 'backend/services/signup/signup.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
users:any={}
user:any={}
msgError!:String
  constructor(private signupService : SignupService, private router:Router) { }

  ngOnInit(): void {
    this.signupService.getAllUseres().subscribe(
      (data)=>{
        this.users = data.finded
        
      })
  }
login(){
  this.signupService.login(this.user).subscribe(
    (data)=> {
      this.users = this.user
      console.log('Data after login',data);
      if (data.message == '0') {
        this.msgError = 'Please Check your email';
      } else  if (data.message == '1')  {
        this.msgError = 'Please Check your PWD';
      } else {
        localStorage.setItem("connectedUser",JSON.stringify(data.user));
        this.router.navigate(['index'])
      }
      }
      
    
  ); 
}
}
