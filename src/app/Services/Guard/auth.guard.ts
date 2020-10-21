import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../userService/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(private router:Router,private userService:UserService) { }
  
  canActivate() : boolean {
    if (this.userService.loggedIn()) {
      return true
    } else {
      this.router.navigate(['/login'])
      return false
    }
  }
}
