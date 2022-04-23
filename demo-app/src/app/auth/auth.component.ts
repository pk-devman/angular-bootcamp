import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  isLoginMode = true;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onSwitchMode(){
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(authForm: NgForm){
    if(authForm.invalid){
      return;
    }
    const email =authForm.value.email;
    const password = authForm.value.password;
    if(this.isLoginMode){
      this.authService.login(email, password).subscribe(res => {
        console.log(res);
        this.router.navigate(['/recipes']);
      });
    }
    else{
      this.authService.signUp(email, password).subscribe(res => {
        console.log(res);
      })
    }
  }

}
