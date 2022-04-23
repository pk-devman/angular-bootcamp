import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, tap } from 'rxjs';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user = new BehaviorSubject<User | null>(null);
  constructor(private http: HttpClient) { }

  signUp(email: string, password: string){
    return this.http.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]', {
      email: email,
      password: password,
      returnSecureToken: true
    }).pipe(tap((resData: any) => {
      this.handleAuthentication(resData.email, resData.idToken, resData.localeId, +resData.expiresIn);
    }));
  }

  login(email: string, password: string){
    return this.http.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]', {
      email: email,
      password: password,
      returnSecureToken: true
    }).pipe(tap((resData: any) => {
      this.handleAuthentication(resData.email, resData.idToken, resData.localeId, +resData.expiresIn);
    }));
  }

  private handleAuthentication(email: string, idToken:string, localeId: string, expiresIn: number){
    const expirationDate = new Date(new Date().getTime() + expiresIn*1000);
    const user = new User(email, localeId, idToken, expirationDate);
    this.user.next(user);
  }
}
