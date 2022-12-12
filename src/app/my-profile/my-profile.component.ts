import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import Swal from 'sweetalert2';
// import { MatDialog } from '@angular/material/dialog';
import { LoginServiceService } from '../service/login-service.service';
import {User}from '../model/user';
@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent {
  profile: FormGroup;
  id!:any;
  cards = localStorage.getItem('card-colr');
  constructor( private userService: LoginServiceService
  ) {
    this.profile = new FormGroup({
      name: new FormControl('', {
        validators: [Validators.required]
      }),
      mn: new FormControl('', {
        validators: [Validators.required]
      }),
      email: new FormControl('', {
        validators: [Validators.required, Validators.pattern('@')]
      }),
      address: new FormControl('', {
        validators: [Validators.required]
      }),
      address1: new FormControl('', {
        validators: [Validators.required]
      }),
      pin: new FormControl('', {
        validators: [Validators.minLength(3)]
      })
    })

  }
  // ngOnInit() {
  //   this.userService.getMyProfile().subscribe((res: User) => {
  //     this.id = res.id;
  //     this.profile.setValue({
  //       companyname: res.name,
  //       gst: res.gstin,
  //       account: res.acct_no,
  //       address: res.address,
  //       address1: res.address1,
  //       mn: res.mobile_no,
  //       email: res.email,
  //       ifsccode: res.ifsc_code,
  //       pin: res.pin_code
  //     })
  //   })

  // }
  submit() {
    const myprofile = new User();
    myprofile.name = this.profile.value.companyname;
    myprofile.email = this.profile.value.email;
    myprofile.mobile_num = this.profile.value.mn;
    myprofile.address = this.profile.value.address;
    myprofile.city = this.profile.value.account;
    myprofile.pincode = this.profile.value.pin_code;
    // this.userService.saveMyProfile(myprofile).subscribe(rees => {
    //   Swal.fire(
    //     'Success!',
    //     'Your are Successfully Saved Details',
    //     'success'
    //   )
    //   this.matDailog.closeAll();
    // })
  }

}
