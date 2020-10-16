import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AdminService } from 'src/app/Services/adminService/admin.service';
import { AddBookComponent } from '../add-book/add-book.component';
import { UpdateBookComponent } from '../update-book/update-book.component';

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
  pageSlice=[];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  admin="Admin";
  ngOnInit() {
    console.log("Hii");
    this.getAllBooks();
  }

  getAllBooks(){
    console.log("Hello");
    this.adminService.getAllBooks().subscribe((data)=>{
      console.log("Happy");
      this.values=data["data"];
      this.pageSlice = this.values.slice(0,5);
      console.log(data);
      console.log(this.values);
    });
  }
 
  dataSource = new MatTableDataSource(this.pageSlice);

  openAddDialog(){
    console.log("Hello")
    let dialogRef = this.dialog.open(AddBookComponent,{});
  }
  openUpdateDialog(element){
    let dialogRef = this.dialog.open(UpdateBookComponent,{data:element});
  }

  deleteBook(element){
    this.adminService.deleteBook(element.bookId).subscribe((data)=>{
      this.getAllBooks();
    });
  }

  OnPageChange(event: PageEvent) {
    console.log(event);
    const startIndex = event.pageIndex * event.pageSize;
    let endIndex = startIndex + event.pageSize;
    console.log(endIndex)
    if (endIndex > this.values.length) {
      endIndex = this.values.length;
    }
    this.pageSlice = this.values.slice(startIndex, endIndex);
    console.log(this.pageSlice)
  }
 
  applyFilter(event: Event) {
    console.log("filterData")
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    console.log(filterValue)
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
      console.log(this.dataSource)
    }
  }
}
