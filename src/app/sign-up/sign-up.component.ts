import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import Swal from 'sweetalert2'
import { LoginServiceService } from '../service/login-service.service';
import { User } from '../model/user';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  newUser: FormGroup;
  companyname!:String;
  constructor( private loginUserService :LoginServiceService,private router: Router) {
    this.newUser = new FormGroup({
      username: new FormControl('', {
        validators: [Validators.required]
      }),
      aadhar_num: new FormControl('', {
        validators: [Validators.required]
      }),
      email: new FormControl('', [Validators.required, Validators.email]),
      mobile_no: new FormControl('',{
        validators: [Validators.required]
      }),
      password: new FormControl('', {
        validators: [Validators.required]
      }),
      con_password: new FormControl('',{
        validators: [Validators.required]

      }),
      address: new FormControl('',{
        validators: [Validators.required]
      }),
      city: new FormControl('',{
        validators: [Validators.required]
      }),
      postalCode: new FormControl('', {
        validators: [Validators.required]
      }),
      country:new FormControl('', {
        validators: [Validators.required]
      })

    })
   }

  ngOnInit(): void {
  }
  submit() {
    const user = new User();
    user.name = this.newUser.value.username;
    user.aadhar_num= this.newUser.value.aadhar_num;
    user.email = this.newUser.value.email;
    user.mobile_num = this.newUser.value.mobile_no;
    user.password = this.newUser.value.password;
    user.address = this.newUser.value.address;
    user.city = this.newUser.value.city;
    user.pincode = this.newUser.value.postalCode;
    user.country=this.newUser.value.country;
    this.loginUserService.saveNewUser(user).subscribe(rees => {
      Swal.fire({
        title: "Good job!",
        text: "Please login ",
        icon: "success",
      });
      this.router.navigate(['/login']);
      console.log("working fine"+rees);
  })
}
}
