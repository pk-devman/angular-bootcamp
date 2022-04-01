import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-two',
  templateUrl: './test-two.component.html',
  styleUrls: ['./test-two.component.css']
})
export class TestTwoComponent implements OnInit {
  message: string = 'first message';
  id: number = 10;
  allowAdd: boolean = false;
  showUserInput: boolean = false;
  constructor() { 
    this.getMessage();
  }

  ngOnInit(): void {
  }

  onButtonClick(){
    this.message = 'Hello class!';
    this.showUserInput = true;
  }

  onTextInput(event: any){
    this.message = event.target.value;
  }


  getMessage(){
    setTimeout(() => {
      this.allowAdd = true;
        
      }, 2000);
    let abc = 'hello abc!';
    return abc;
  }

}
