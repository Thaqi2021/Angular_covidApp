import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { Center } from '../model/center';
@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private baseUrl="http://localhost:8080/";

  constructor(private httpClient :HttpClient,private router: Router) { }

  public addCenter(centerDet:Center){
    console.log(centerDet);
    return this.httpClient.post<Center>(this.baseUrl+'addCenter',centerDet);
  }

  public getAllCenter(): Observable<Center[]>{
    return this.httpClient.get<Center[]>(this.baseUrl+'vaccenter');
  }
  public removeCenter(center_id:any){
    return this.httpClient.post<Center>(this.baseUrl+'removeCenter',center_id);
  }
}
