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
}
