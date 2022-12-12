import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { BookApmt } from '../model/book-apmt';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  private baseUrl="http://localhost:8080/";

  constructor(private httpClient :HttpClient,private router: Router) { }

  public CheckAvailCenter(center_id:any,date:any){
    return this.httpClient.post(this.baseUrl+'checkAppointment',center_id,date);
  }

  public BookApt(aptdetails:BookApmt){
    console.log(aptdetails);
    return this.httpClient.post<BookApmt>(this.baseUrl+'book',aptdetails);
  }

  public getslot(id:any): Observable<BookApmt[]>{
    return this.httpClient.get<BookApmt[]>(this.baseUrl+'getslot-'+id);
  }
  public cancelApmt(id:any){
    return this.httpClient.post(this.baseUrl+'cancelapt',id);
  }

}
