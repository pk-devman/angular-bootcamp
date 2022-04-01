import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-one',
  templateUrl: './test-one.component.html',
  // template:`<h1>
  // This is test ONE
  // </h1>`,
  styleUrls: ['./test-one.component.css']
  //styles: [`p {color: blue}`]
})
export class TestOneComponent implements OnInit {

  randomNum: number =0;
  numberList: number[] = [Math.random(), Math.random(), Math.random(), Math.random(), Math.random()];
  constructor() { 
    this.randomNum = Math.random();
  }

  ngOnInit(): void {
  }

  getColor(){
    return this.randomNum > 0.5 ? 'green' : 'red';
  }

}
