import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  expression = false;
  title = "kakabo";
  age = 18;

  ngOnInit(): void {

  }

  onForExample(text: string) {
    alert(text);
  }


}

