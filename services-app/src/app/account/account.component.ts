import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AccountService } from '../services/account.service';
import { LoggerService } from '../services/logger.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  //providers: [LoggerService]
})
export class AccountComponent {
  @Input() account?: {name: string, status: string};
  @Input() id: number = 0;
  @Output() statusChanged = new EventEmitter<{id: number, newStatus: string}>();

  constructor(private loggerService: LoggerService, private accountService: AccountService){

  }


  onSetTo(status: string) {
    //this.statusChanged.emit({id: this.id, newStatus: status});
    //console.log('A server status changed, new status: ' + status);
    //let loggerService = new LoggerService();
    this.accountService.updateStatus(this.id, status);
    //this.loggerService.logStatusChange(status);
  }
}
