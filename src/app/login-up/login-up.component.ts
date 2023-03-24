import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SignupService } from 'backend/services/signup/signup.service';

@Component({
  selector: 'app-login-up',
  templateUrl: './login-up.component.html',
  styleUrls: ['./login-up.component.css']
})
export class LoginUpComponent implements OnInit {
signupForm! : FormGroup;
imagePreview: any
  constructor(private fb:FormBuilder, private signupService:SignupService) { }

  ngOnInit(): void {

this.signupForm = this.fb.group ({
  firstName : [''],
  lastName : [''],
  numberPhone : [''],
  password : [''],
  img: [''],
  
})







  }
signup(x:any){

  this.signupService.signup(x, this.signupForm.value.img).subscribe();
  console.log('here', this.signupForm.value.img);
}

onImageSelected(event: any) {
  let file: any = event.target.files[0];
  this.signupForm.patchValue({ img: file });
  this.signupForm.updateValueAndValidity();
  const reader = new FileReader();
  reader.onload = () => {
    this.imagePreview = reader.result as string
  };
  reader.readAsDataURL(file);
}
}
