import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input('userId') id: number = 0;
  @Input('userName') name: string = '';
  @Output('onUserDelete') onDeleteEvent: EventEmitter<number> = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }

  onDelete(id: number){
    console.log(id + 'on delete clicked!');
    this.onDeleteEvent.emit(id);
  }

}
