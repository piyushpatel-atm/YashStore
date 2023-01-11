import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {  UserForm } from './data-type';
import { AuthService } from './services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  url: string = 'http://localhost:3000';

  constructor(public http: HttpClient, private authService: AuthService) {}

  UserPost(emp: UserForm) {
    console.log(emp);

    return this.http.post<UserForm>(this.url + '/User', emp);
  }

  GetUser(email:string | null){
    return this.http.get<UserForm>(this.url+`/User?email=${email}`);
  }
}
