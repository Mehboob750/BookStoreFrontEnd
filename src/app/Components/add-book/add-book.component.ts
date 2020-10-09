import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import {FormControl, Validators} from '@angular/forms';
import { AdminService } from 'src/app/Services/adminService/admin.service';


@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddBookComponent>,private adminService:AdminService) { }

  ngOnInit(): void {
  }

  data = [];

  bookName = new FormControl('', [Validators.required, Validators.minLength(3)]);
  authorName = new FormControl('', [Validators.required, Validators.minLength(3)]);
  description = new FormControl('', [Validators.required, Validators.minLength(3)]);
  price = new FormControl('',[Validators.required]);
  quantity = new FormControl('',[Validators.required]);
  
  url = "../../../assets/Images/book.jpg";

  bookImage=null;
  selectFile(event){
    if (event.target.files) {
      this.bookImage=event.target.files[0]
      console.log(this.bookImage)
      var reader = new FileReader()
      reader.readAsDataURL(event.target.files[0])
      reader.onload = (event:any) => {
      this.url = event.target.result;
      }
    }
  }

  getBookNameErrorMessage(){
    if (this.bookName.hasError('required')) {
      return 'Please enter a book name';
    }
   return this.bookName.invalid ? 'Invalid book name' : '';
  }

  getAuthorNameErrorMessage(){
    if (this.authorName.hasError('required')) {
      return 'Please enter a author name';
    }
   return this.authorName.invalid ? 'Invalid author name' : '';
  }

  getDescriptionErrorMessage(){
    if (this.description.hasError('required')) {
      return 'Please enter a description';
    }
   return this.description.invalid ? 'Invalid description' : '';
  }

  getpriceErrorMessage(){
    if (this.price.hasError('required')) {
      return 'Please enter a price';
    }
    return this.price.invalid ? 'Invalid price' : '';
  }

  getQuantityErrorMessage(){
    if (this.quantity.hasError('required')) {
      return 'Please enter a quantity';
    }
    return this.quantity.invalid ? 'Invalid quantity' : '';
  }

  add() {
    if(this.bookName.valid&&this.authorName.valid && this.description.valid && this.price.valid && this.quantity.valid){
     this.addBook();
    }
    else{
      this.bookName.markAsTouched();
      this.authorName.markAsTouched();
      this.description.markAsTouched();
      this.price.markAsTouched();
      this.quantity.markAsTouched();
    }
  }

  addBook(){
    var formData: any = new FormData();
      formData.append("bookName", this.bookName.value);
      formData.append("authorName", this.authorName.value);
      formData.append("description", this.description.value);
      formData.append("price", this.price.value);
      formData.append("quantity", this.quantity.value);
      formData.append("image", this.bookImage);
      console.log(formData)
    this.adminService.addBook(formData).subscribe((data)=>{
    });
    // console.log(data);
    this.dialogRef.close();
  }
   
  }

 

