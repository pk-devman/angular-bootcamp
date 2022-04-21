import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') myForm!: NgForm;
  answer!: string;

  suggestUserName() {
    const suggestedName = 'Superuser';
    // this.myForm.setValue({
    //   userData: {
    //     username: suggestedName,
    //     email: ''
    //   },
    //   secret: 'pet',
    //   questionAnswer: ''
    // });
    this.myForm.form.patchValue({userData: {
      username: suggestedName
    }})
  }

  onSubmit(){
    console.log(this.myForm);
    this.myForm.reset();
  }
}
