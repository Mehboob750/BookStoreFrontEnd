import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/Services/dataService/data.service';
import { UserService } from 'src/app/Services/userService/user.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private userService:UserService,private data: DataService) { }
  values=[];
  message=""

  ngOnInit() {
    this.getCartData();
    // this.data.currentMessage.subscribe(message => this.message = message)
  }

  // newMessage() {
  //   this.data.changeMessage("Hello from Sibling")
  // }
  getCartData(){
    this.userService.getCartData().subscribe((data)=>{
      this.values=data["data"];
      console.log(this.values)
    });
  }
}
