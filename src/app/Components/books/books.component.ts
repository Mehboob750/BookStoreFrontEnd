import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/userService/user.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  values=[];
  constructor(private userService:UserService) { }

  ngOnInit() {
    this.getAllBooks();
  }

  getAllBooks(){
    console.log("Hello");
    this.userService.getAllBooks().subscribe((data)=>{
      this.values=data["data"];
      console.log(this.values)
    });
  }
  count=this.values.length
}
