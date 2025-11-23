import { Component, inject } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  imports: [FormsModule],
  templateUrl: './login-page.html',
  styleUrl: './login-page.scss',
})
export class LoginPage {
  username:string='';
  password:string='';
  remember:boolean=false;
  message:string='';
  router=inject(Router);//دراینجا به روتر انگولار احتیاج داریم
test(){
  if (this.username=='ava' && this.password=='ava') {
    this.router.navigateByUrl('/private');
  }else{
    this.message='نام کاربری یا کلمه عبور صحیح نیست'
  }
  }
}