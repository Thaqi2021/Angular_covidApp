import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { LoginServiceService } from 'src/app/service/login-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent {
  loginForm !: FormGroup;
  loading = false;
  submitted = false;
   us: User = new User;
   constructor(
    private loginUserService :LoginServiceService,
    private router: Router,
    // private store: Store,
   ) {
    this.loginForm = new FormGroup({
      email: new FormControl('', {
        validators: [Validators.required, Validators.email]
      }),
      password: new FormControl('', {
        validators: [Validators.required]
      })
    })
  }
  ngOnInit(): void {
  }
  data!:any;

  submit():void{
    console.log(this.loginForm.get('email')?.value,this.loginForm.get('password')?.value);
    let email =this.loginForm.get('email')?.value;
    let pass = this.loginForm.get('password')?.value;
    if(email==="admin@gmail.com" && pass==="1234"){
      this.router.navigate(['/AdminHome']);
    }

  }

  onSubmit() {

  }

}
