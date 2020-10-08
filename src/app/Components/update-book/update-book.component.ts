import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<UpdateBookComponent>) { }

  ngOnInit(): void {
  }

  updateBook(){
    this.dialogRef.close();
  }
}
