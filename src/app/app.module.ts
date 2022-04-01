import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInModule } from "./sign-in/sign-in.module";
import { SignUpModule } from "./sign-up/sign-up.module";
import { TodoModule } from "./todo/todo.module";
import { NgForDirective } from './ng-for.directive';
import { NgForOfDirective } from './ng-for-of.directive';
import { NgIfDirective } from './ng-if.directive';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    NgForDirective,
    NgForOfDirective,
    NgIfDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SignInModule,
    SignUpModule,
    TodoModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
