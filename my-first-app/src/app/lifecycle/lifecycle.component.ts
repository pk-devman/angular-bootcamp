import { AfterContentChecked, AfterContentInit, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css']
})
export class LifecycleComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, OnDestroy {
  @Input() title: string = '';

  @ViewChild('pageTitle', {static: true}) pageTitle: any;
  constructor() { 
    console.log('constructor')
  }
 
  ngOnChanges(simpleChanges: any){
    //console.log(simpleChanges);    
    console.log('ngOnChanges');    
  }

  ngOnInit(): void {
    console.log('ngOnInit');
    console.log(this.pageTitle);
  }

  ngDoCheck(): void {
    console.log('ngDoCheck')
  }

  ngAfterContentInit(){
    console.log('ngAfterContentInit');
  }

  ngAfterContentChecked(){
    console.log('ngAfterContentChecked');
  }

  ngAfterViewInit(){
    console.log('ngAfterViewInit');
    console.log(this.pageTitle);

  }

  ngAfterViewChecked(){
    console.log('ngAfterViewChecked');
  }

  ngOnDestroy(){
    console.log('ngOnDestroy');
  }



}
