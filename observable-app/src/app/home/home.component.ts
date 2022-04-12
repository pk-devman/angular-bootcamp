import { Component, OnDestroy, OnInit } from '@angular/core';
import { filter, interval, map, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  intervalSubsciption!: Subscription;
  constructor() { }
  
  ngOnInit() {

    // this.intervalSubsciption = interval(1000).subscribe(count => {
    //   console.log(count);
    // });

    const customIntervalObservable = new Observable(observer => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        if(count === 3){
          observer.complete();
        }

        if(count > 5){
          observer.error(new Error('Count is greater than 3!'));
        }
        count ++;
      }, 1000);
    });

    // this.intervalSubsciption = customIntervalObservable.pipe(map((data: any) => {
    //   return 'Round: ' + (data + 1);
    // })).subscribe(value => {
    //   console.log(value);
    // }, error => {
    //   console.log(error);
    //   alert(error.message);
    // });

    this.intervalSubsciption = customIntervalObservable.pipe(filter((data: any) => {
      return data > 0;
    })).subscribe(value => {
      console.log(value);
    }, error => {
      console.log(error);
      alert(error.message);
    });
  }

  ngOnDestroy(): void {
    this.intervalSubsciption.unsubscribe();
  }


}
