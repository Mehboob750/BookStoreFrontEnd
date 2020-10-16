import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/userService/user.service';
import { DataService } from "../../Services/dataService/data.service";

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  values=[];
  message=""
  count=0
  constructor(private userService:UserService,private data: DataService) { }

  ngOnInit() {
    this.getAllBooks();
    this.data.currentMessage.subscribe(message => this.message = message)
  }

  getAllBooks(){
    console.log("Hello");
    this.userService.getAllBooks().subscribe((data)=>{
      this.values=data["data"];
      this.count=this.values.length
      console.log(this.values)
    });
  }
 
}
