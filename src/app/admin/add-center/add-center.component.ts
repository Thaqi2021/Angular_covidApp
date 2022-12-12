import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Center } from 'src/app/model/center';
import { LoginServiceService } from 'src/app/service/login-service.service';
import { AdminService } from 'src/app/service/admin.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-add-center',
  templateUrl: './add-center.component.html',
  styleUrls: ['./add-center.component.scss']
})
export class AddCenterComponent {
  AddCenterForm !: FormGroup;
  loading = false;
  submitted = false;
   constructor(
    private loginUserService :LoginServiceService,
    private adminService :AdminService,
    private router: Router,
    // private store: Store,
   ) {
    this.AddCenterForm = new FormGroup({
      admin_name: new FormControl('', {
        validators: [Validators.required]
      }),
      admin_role: new FormControl('', {
        validators: [Validators.required]
      }),
      admin_email: new FormControl('', {
        validators: [Validators.required, Validators.email]
      }),
      admin_pass: new FormControl('', {
        validators: [Validators.required]
      }),
      contact_num: new FormControl('', {
        validators: [Validators.required]
      }),
      flat_name: new FormControl('', {
        validators: [Validators.required]
      }),
      center_address: new FormControl('', {
        validators: [Validators.required]
      }),
      center_city: new FormControl('', {
        validators: [Validators.required]
      }),
      center_state: new FormControl('', {
        validators: [Validators.required]
      }),
      center_pincode: new FormControl('', {
        validators: [Validators.required]
      }),
      center_country: new FormControl('', {
        validators: [Validators.required]
      }),
    })
  }
  ngOnInit(): void {

  }
  data!:any;

  submit():void{
      const cn  = new Center;
      cn.admin_name=this.AddCenterForm.value.admin_name;
      cn.admin_role= this.AddCenterForm.value.admin_role;
      cn.contact_num = this.AddCenterForm.value.contact_num;
      cn.flat_name = this.AddCenterForm.value.flat_name;
      cn.admin_email= this.AddCenterForm.value.admin_email;
      cn.admin_pass= this.AddCenterForm.value.admin_pass;
      cn.center_address=this.AddCenterForm.value.center_address;
      cn.center_city = this.AddCenterForm.value.center_city;
      cn.center_state = this.AddCenterForm.value.center_state;
      cn.center_pincode = this.AddCenterForm.value.center_pincode;
      cn.center_country= this.AddCenterForm.value.center_country;
      cn.active=1;
      this.adminService.addCenter(cn).subscribe(rees => {
          Swal.fire(
            'Success!',
            'Your are Successfully Saved Details',
            'success'
          )
        });


  }

  onSubmit() {

  }

}
