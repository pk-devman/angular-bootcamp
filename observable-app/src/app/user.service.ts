import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  //onUserActivated = new EventEmitter<boolean>();
  onUserActivated = new Subject<boolean>();

  onValueChanged = new BehaviorSubject<number>(2);

  constructor() { }
}
