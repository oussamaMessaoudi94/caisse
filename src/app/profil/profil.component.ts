import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SignupService } from 'backend/services/signup/signup.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
 signups : any=[]
  user :any
  signup :any=[]
  constructor(private router:Router, private signupService : SignupService) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('connectedUser') || '[]');


this.signupService.getAllUseres().subscribe(
  (data)=>{
this.signup = data.finded

var mySignup=[];
for (let i = 0; i < this.signup.length; i++ ) {
  if (this.signup[i].img == this.user.img ) {
    mySignup.push(this.signup[i])
this.signups = mySignup
console.log('aloalo', this.signups);

  }
}
  }
)



  }








  logOut(){
    localStorage.removeItem('connectedUser');
    this.router.navigate([''])
  }
}