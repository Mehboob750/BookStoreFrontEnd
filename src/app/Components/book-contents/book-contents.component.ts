import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-book-contents',
  templateUrl: './book-contents.component.html',
  styleUrls: ['./book-contents.component.css']
})
export class BookContentsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  bookName = new FormControl('', [Validators.required, Validators.minLength(3)]);
  authorName = new FormControl('', [Validators.required, Validators.minLength(3)]);
  description = new FormControl('', [Validators.required, Validators.minLength(3)]);
  price = new FormControl('',[]);
  quantity = new FormControl('',[]);

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
  }

  getQuantityErrorMessage(){
    if (this.quantity.hasError('required')) {
      return 'Please enter a quantity';
    }
  }

  addBook() {
    if(this.bookName.valid&&this.authorName.valid && this.description.valid && this.price.valid && this.quantity.valid){
    // this.onRegister();
    }
    else{
      this.bookName.markAsTouched();
      this.authorName.markAsTouched();
      this.description.markAsTouched();
      this.price.markAsTouched();
      this.quantity.markAsTouched();
    }
  }
}
