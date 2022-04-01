import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-app';
  showLifecycle: boolean = true;

  onChange(){
    this.title = 'Title Changed!';
  }

  onDestroy(){
    this.showLifecycle = false;
  }
}
