import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})
//@Injectable()
export class AccountService {

  constructor(private loggerService: LoggerService) { }
  accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Testaccount',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];

  addAccount(name: string, status: string){
    this.accounts.push({name: name, status: status});
    this.loggerService.logStatusChange(status);

  }

  updateStatus(id: number, status: string){
    this.accounts[id].status = status;
    this.loggerService.logStatusChange(status);
  }
}
