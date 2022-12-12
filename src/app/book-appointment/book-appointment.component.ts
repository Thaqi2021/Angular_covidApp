import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from '../service/admin.service';
import { LoginServiceService } from '../service/login-service.service';
import {MatDatepicker} from '@angular/material/datepicker'
import { Center } from '../model/center';
import { User } from '../model/user';
import { BookApmt } from '../model/book-apmt';
import { BookingService } from '../service/booking.service';
@Component({
  selector: 'app-book-appointment',
  templateUrl: './book-appointment.component.html',
  styleUrls: ['./book-appointment.component.scss']
})
export class BookAppointmentComponent {
  AppointmentForm !: FormGroup;
  loading = false;
  submitted = false;
  dataSource!:Center[];
   constructor(
    private loginUserService :LoginServiceService,
    private adminService :AdminService,
    private bookservice: BookingService,
    private router: Router,
    // private store: Store,
   ) {
    this.AppointmentForm = new FormGroup({
      name: new FormControl('', {
        validators: [Validators.required]
      }),
      dose: new FormControl('', {
        validators: [Validators.required]
      }),
      loc: new FormControl('', {
        validators: [Validators.required]
      }),
      mobile_num: new FormControl('', {
        validators: [Validators.required]
      }),
      otp: new FormControl('', {
        validators: [Validators.required]
      }),
      apt_date:new FormControl('', {
        validators: [Validators.required]
      }),
    })
    this.AppointmentForm.controls['name'].setValue(User.nname);
    this.AppointmentForm.controls['mobile_num'].setValue(User.mmobile_num);


    this.adminService.getAllCenter().subscribe(data=>{
      this.dataSource=data;
    })
  }
  submit(){
      console.log(User.ppat_id);

      const book = new BookApmt;
      book.pat_idb= User.ppat_id;
      book.center_idb = this.AppointmentForm.value.loc;
      book.date= this.AppointmentForm.value.apt_date;
      book.vac= this.AppointmentForm.value.dose;
      book.mob_nmb= this.AppointmentForm.value.mobile_num;
      if(User.ppat_id!=undefined){
          this.bookservice.BookApt(book).subscribe(data=>{
            console.log("Done");
            this.router.navigate(['/home']);
          })
      }
  }
  checkavail(){
    let id = this.AppointmentForm.value.loc;
    let date =this.AppointmentForm.value.date;
      this.bookservice.CheckAvailCenter(id,date).subscribe(data=>{
          console.log("available ")
      })
  }
}
