import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  @Input() childMessage: string;
  constructor() { }

  show1=null
  show2=null
  name=localStorage.getItem('firstName')
  ngOnInit() {
    if (this.childMessage == "Admin"){
      this.show1=false;
      this.show2=true;
    }
    else{
      this.show1=true;
      this.show2=true;
    }
  }
  
}
