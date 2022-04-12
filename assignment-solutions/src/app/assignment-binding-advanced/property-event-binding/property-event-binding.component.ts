import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-event-binding',
  templateUrl: './property-event-binding.component.html',
  styleUrls: ['./property-event-binding.component.css']
})
export class PropertyEventBindingComponent implements OnInit {
  oddNums: number[] = [];
  evenNums: number[] = [];
  constructor() { }

  ngOnInit(): void {
  }

  onIntervalChanged(index: number){
    if(index % 2 === 0){
      this.evenNums.push(index);
    }
    else{
      this.oddNums.push(index);
    }
  }

}
