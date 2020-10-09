import { Injectable } from '@angular/core';
import {HttpService} from '../httpService/http.service'

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpService) { }

  getAllBooks(){
    return this.http.get("/Book")
  }

  addBook(data){
    return this.http.postAutharize(data,"/Book")
   }

   updateBook(data,id){
    return this.http.postAutharize(data,"/Book/"+id)
   }
}
