import { Injectable } from '@angular/core';
import {User } from '../model/user';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  private baseUrl="http://localhost:8080/";
  user = new User();
  constructor(private httpClient :HttpClient,private router: Router) { }
  loginUser(emailid:String ,pswd:String){
    // console.log(emailid+"im working fine "+pswd);

    this.user.email=emailid;
    this.user.password=pswd;
    console.log(this.baseUrl);
    console.log(this.user);
    return this.httpClient.post<User>(this.baseUrl+'login',this.user);
  }
  public findAll(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.baseUrl+'users');
  }
  public saveNewUser(user:User){
    console.log(user);
    return this.httpClient.post<User>(this.baseUrl+'signUp',user);
  }


}
