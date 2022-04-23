import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../shared/auth.service';
import { DataAccessService } from '../shared/data-access.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  collapsed: boolean = true;
  isAuthenticated: boolean = false;
  //@Output() featureSelected: EventEmitter<string> = new EventEmitter<string>();
  userSubscription!: Subscription;
  constructor(private dataAccessService: DataAccessService, private authService: AuthService) { }

  ngOnInit(): void {
    this.userSubscription = this.authService.user.subscribe(user => {
      this.isAuthenticated = !!user;
    });
  }

  // onSelect(feature: string){
  //   this.featureSelected.emit(feature);
  // }

  onSave(){
    this.dataAccessService.storeRecipes();
  }

  onFetch(){
    this.dataAccessService.fetchRecipes();
  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }

}
