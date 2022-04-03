import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-app';
  showLifecycle: boolean = true;

  numbers: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  onChange(){
    this.title = 'Title Changed!';
  }

  isEven(num: number){
    return num %2 === 0;
  }

  onDestroy(){
    this.showLifecycle = false;
  }
}
