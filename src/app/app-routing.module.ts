import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';

const routes: Routes = [
  {path :'', component:LoginComponent},
  { path: 'home', component: HomeComponent },
  {path :'login', component:LoginComponent},
  { path:'signUp',component:SignUpComponent },
  { path :'myProfile', component:MyProfileComponent},
  { path :'AdminHome', component:AdminHomeComponent},
  { path : 'adminLogin' ,component:AdminLoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
