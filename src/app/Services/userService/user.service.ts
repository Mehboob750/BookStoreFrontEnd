import { Injectable } from '@angular/core';
import {HttpService} from '../httpService/http.service'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpService) { }

   register(data){
    return this.http.post(data,"/User/Registration")
   }

   login(data){
    return this.http.post(data,"/User/Login")
   }

   loggedIn() {
     return !!localStorage.getItem('token')
   }

   getAllBooks(){
    return this.http.get("/Book")
   }

   getCartData(){
    return this.http.get("/Cart")
  }
}
