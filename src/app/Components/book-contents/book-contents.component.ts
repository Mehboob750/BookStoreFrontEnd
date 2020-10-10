import { Component, OnInit,Input } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { AdminService } from 'src/app/Services/adminService/admin.service';
import { AddBookComponent } from '../add-book/add-book.component';
import { UpdateBookComponent } from '../update-book/update-book.component';

@Component({
  selector: 'app-book-contents',
  templateUrl: './book-contents.component.html',
  styleUrls: ['./book-contents.component.css']
})
export class BookContentsComponent implements OnInit {

  @Input() childMessage: string;
  @Input() id: any;
  constructor(private adminService:AdminService,public dialogRef: MatDialogRef<UpdateBookComponent>,public dialogRef2: MatDialogRef<AddBookComponent>) { console.log(this.id) }

  ngOnInit(): void {
  }

  data1 = [];

  bookName = new FormControl('', [Validators.required, Validators.minLength(3)]);
  authorName = new FormControl('', [Validators.required, Validators.minLength(3)]);
  description = new FormControl('', [Validators.required, Validators.minLength(3)]);
  price = new FormControl('',[Validators.required]);
  quantity = new FormControl('',[Validators.required]);
  
  url = "../../../assets/Images/add_image.png";

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

  clickFunction(){
      if(this.bookName.valid&&this.authorName.valid && this.description.valid && this.price.valid && this.quantity.valid){
        if (this.childMessage == 'Add'){
          this.addBook();
        }
        else{
          this.updateBook();
        }      
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
    this.dialogRef2.close();
  }

  updateBook(){
    var formData: any = new FormData();
    formData.append("bookName", this.bookName.value);
    formData.append("authorName", this.authorName.value);
    formData.append("description", this.description.value);
    formData.append("price", this.price.value);
    formData.append("quantity", this.quantity.value);
    formData.append("image", this.bookImage);
 
    this.adminService.updateBook(formData,this.id).subscribe((data)=>{
    });
    this.dialogRef.close();
  }
}
