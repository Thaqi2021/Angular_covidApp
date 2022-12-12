import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../model/user';
import { LoginServiceService } from '../service/login-service.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
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
    this.loginUserService.loginUser(this.loginForm.get('email')?.value,this.loginForm.get('password')?.value).
    subscribe(
      data=>{
        // console.log(data);
        // if(data.mobile_num==7845014181 && data.email=="admin@gmail.com"){
         // // Admin.admin_isAuth=true;
        //   this.router.navigate(['/dashboard']);
        // }else{
        this.us=data;
      this.gotonext(this.us);
      // }
    },err=>{
      console.log("data");
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Email ID or Password Wrong!',
        // footer: '<a href="">Why do I have this issue?</a>'
      })

    });
  }

  onSubmit() {

  }
  gotonext(user:User){
    console.log(user);
    User.nname =user.name;
    User.ppat_id=user.pat_id;
    User.mmobile_num = user.mobile_num;
    this.router.navigate(['/home']);


  }
}
