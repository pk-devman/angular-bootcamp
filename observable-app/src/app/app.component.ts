import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: string='';
  userActivated: boolean = false;

  value: any;
  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.onUserActivated.subscribe(val => {
      this.userActivated = val;
    });

    this.userService.onValueChanged.subscribe(val => {
      this.value = val;
    })
  }
}
