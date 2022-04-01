import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
  //encapsulation: ViewEncapsulation.ShadowDom
})
export class ParentComponent implements OnInit {
  users: any[] = [{id: 1, name: 'PK'}, {id: 2, name: 'AA'}, {id: 3, name: 'BB'}];
  @ViewChild('addUserName') addUserName: any;
  constructor() { }

  ngOnInit(): void {
  }

  onDeleteUser(id: number){
    this.users = this.users.filter(u => u.id !== id);
  }

  // onAddUser(addUserName: HTMLInputElement){
  //   this.users.push({id: this.users[this.users.length - 1].id + 1, name: addUserName.value});
  // }

  onAddUser(){
    this.users.push({id: this.users[this.users.length - 1].id + 1, name: this.addUserName.nativeElement.value});
  }

}
