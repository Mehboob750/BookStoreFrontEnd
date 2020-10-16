import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/userService/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router,private userService:UserService) { }

  ngOnInit(): void {
  }

  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required, Validators.minLength(6)]);
  getEmailErrorMessage() {
    
    if (this.email.hasError('required')) {
      return 'Please enter a email id';
    }
    if (this.email.hasError('email')) {
    return 'Invalid email';
    }
  }

  getPasswordErrorMessage(){

    if (this.password.hasError('required')) {
      return 'Please enter a password';
    }
   return this.password.invalid ? 'Password length must be greater than 6' : '';
  }

  login() {
    if(this.password.valid && this.email.valid){
     this.onLogin();
     
    }
    else{
      this.email.markAsTouched();
      this.password.markAsTouched();
    }
  }

  onLogin(){
    let data={
      "emailId": this.email.value,
      "password":this.password.value
      //"role":"User"
     } 
     this.userService.login(data).subscribe((data)=>{
      console.log(data);
     localStorage.setItem('firstName',data['data']['firstName']);
     localStorage.setItem('lastName',data['data']['lastName']);
     localStorage.setItem('token',data['data']['token']);
     localStorage.setItem('id',data['data']['id']);
     localStorage.setItem('role',data['data']['role']);
     localStorage.setItem('email',data['data']['emailId']);
      if (localStorage.getItem('role') == "User"){
        this.router.navigateByUrl('/userDashboard')
      }
      else{
        this.router.navigateByUrl('/adminDashboard')
      }
    });

  }
}
