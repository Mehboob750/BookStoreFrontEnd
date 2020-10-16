import { ValueTransformer } from '@angular/compiler/src/util';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-books',
  templateUrl: './display-books.component.html',
  styleUrls: ['./display-books.component.css']
})
export class DisplayBooksComponent implements OnInit {
  @Input() values=[];
  @Input() count;
  public show:boolean = false;

  constructor() { }
  ngOnInit() {
    console.log(this.count)
  }

  count2=this.values.length
  url = "../../../assets/Images/no-image.png";

  toggle() {
    this.show = !this.show;

  }
}
