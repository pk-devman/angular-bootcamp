import { Component, EventEmitter, Output } from '@angular/core';
import { AccountService } from '../services/account.service';
import { LoggerService } from '../services/logger.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  //providers: [LoggerService]
})
export class NewAccountComponent {
  @Output() accountAdded = new EventEmitter<{name: string, status: string}>();

  constructor(private loggerService: LoggerService, private accountService: AccountService){}

  onCreateAccount(accountName: string, accountStatus: string) {
    // this.accountAdded.emit({
    //   name: accountName,
    //   status: accountStatus
    // });
    //console.log('A server status changed, new status: ' + accountStatus);
    this.accountService.addAccount(accountName, accountStatus);
    //this.loggerService.logStatusChange(accountStatus);
  }
}
