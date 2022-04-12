import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() intervalChanged = new EventEmitter<number>();
  lastNumber: number = 0;
  interval: any;
  constructor() { }

  ngOnInit(): void {
  }

  onStartGame(){
    this.interval =  setInterval(() => {
      this.intervalChanged.emit(this.lastNumber + 1);
      this.lastNumber++;
      console.log(this.lastNumber);
    }, 1000)
  }

  onStopGame(){
    clearInterval(this.interval);
  }

}
