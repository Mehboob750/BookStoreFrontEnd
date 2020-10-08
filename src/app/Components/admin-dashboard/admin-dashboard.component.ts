import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AdminService } from 'src/app/Services/adminService/admin.service';
import { AddBookComponent } from '../add-book/add-book.component';

export interface PeriodicElement {
  bookName: string;
  authorName: number;
  description: string;
  price: string;
  quantity:number;
  image:string;
}

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  displayedColumns: string[] = ['image', 'bookName', 'authorName', 'description','price','quantity','update','delete'];
    constructor(private adminService:AdminService, public dialog:MatDialog) { }
  values=[];
  ngOnInit() {
    console.log("Hii");
    this.getAllBooks();
  }

  getAllBooks(){
    console.log("Hello");
    this.adminService.getAllBooks().subscribe((data)=>{
      console.log("Happy");
      this.values=data["data"];
      console.log(data);
      console.log(this.values);
    });
  }
  dataSource = this.values;

  openDialog(value){
    console.log("Hello")
    let dialogRef = this.dialog.open(AddBookComponent,{data:value});
  }
}
