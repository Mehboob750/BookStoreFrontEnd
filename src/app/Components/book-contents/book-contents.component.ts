import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-book-contents',
  templateUrl: './book-contents.component.html',
  styleUrls: ['./book-contents.component.css']
})
export class BookContentsComponent implements OnInit {

  constructor() { }

  @Output() messageEvent = new EventEmitter<any>();

  ngOnInit():void {
  }
  bookName = new FormControl('', [Validators.required, Validators.minLength(3)]);
  authorName = new FormControl('', [Validators.required, Validators.minLength(3)]);
  description = new FormControl('', [Validators.required, Validators.minLength(3)]);
  price = new FormControl('',[]);
  quantity = new FormControl('',[]);

  url = "../../../assets/Images/book.jpg";

  selectFile(event){
    if (event.target.files) {
      var reader = new FileReader()
      reader.readAsDataURL(event.target.files[0])
      reader.onload = (event:any) => {
      this.url = event.target.result;
      console.log(this.url);
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

  sendData(){
    let data = {
      "bookName" : this.bookName.value,
      "authorName" : this.authorName.value,
      "description" : this.description.value,
      "price" : this.price.value,
      "quantity" : this.quantity.value,
      "image" : this.url
    }
    this.messageEvent.emit(data)
  }
}
