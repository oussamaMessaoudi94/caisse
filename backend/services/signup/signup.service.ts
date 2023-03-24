import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
userUrl = 'http://localhost:3000/users'
  constructor(private httpClient : HttpClient) { }

  // signup(user: any) {
  //   return this.httpClient.post<{ message: String }>(`${this.userUrl}/signup`, user)
  // }

  signup(user: any, img:File){
    let formData = new FormData();
    formData.append('firstName', user.firstName);
    formData.append('lastName', user.lastName);
    formData.append('numberPhone', user.numberPhone);
    formData.append('password', user.password);
    formData.append('img', img);
    return this.httpClient.post<{message:String}>(`${this.userUrl}/signup`, formData);
  }

  login(user: any) {
    return this.httpClient.post<{ user: any, message: String }>(`${this.userUrl}/login`, user)
  }

  getAllUseres() {
    return this.httpClient.get<{ finded: any }>(this.userUrl)
  }
}
