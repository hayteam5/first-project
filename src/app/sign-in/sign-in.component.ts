import {Component, EventEmitter, Input, Output, OnInit} from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})


export class SignInComponent {
 /* @Input() title!: string;
  @Input() counter = 0;

  @Output() forExample = new EventEmitter();
  @Output() counterChange = new EventEmitter();*/

  name:string = "";

  constructor() {
  }

  ngOnInit(): void {
   /* console.log("title is" + " " + this.title);*/
  }

  /*onForExample() {
    this.forExample.emit(this.title + ' Hello');
  }*/

  onSubmit(value:any) {
    console.log(value)
  }
}
