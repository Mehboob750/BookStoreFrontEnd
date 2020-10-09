import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<UpdateBookComponent>,@Inject(MAT_DIALOG_DATA) public data: any) { console.log(data) }

  ngOnInit(): void {
  }

  update="Update";
  updateBook(){
    this.dialogRef.close();
  }
}
