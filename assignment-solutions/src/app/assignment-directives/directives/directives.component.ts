import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
  showText: boolean = false;
  log: any[] = [];
  constructor() { }

  ngOnInit(): void {
  }

  onToggle(){
    this.showText = !this.showText;
    //this.log.push(this.log.length + 1);
    this.log.push(new Date());
  }

  getColor(i: number){
    return {'background-color': i > 3 ? 'blue' : 'transparent'};
  }

}
