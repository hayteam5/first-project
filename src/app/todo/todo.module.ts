import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo.component';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    TodoComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule
  ],
  exports: [
    TodoComponent
  ]
})
export class TodoModule { }
