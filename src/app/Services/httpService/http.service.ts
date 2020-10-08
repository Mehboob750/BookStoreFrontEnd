import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  baseUrl=environment.baseUrl
  // private options = { headers: new HttpHeaders().set('Authorization', localStorage.getItem('token')) };
  constructor(private httpClient: HttpClient) { }

  post(data,url){
    return this.httpClient.post(this.baseUrl+url,data)
  }

  get(url){
    return this.httpClient.get(this.baseUrl+url)
  }
}
