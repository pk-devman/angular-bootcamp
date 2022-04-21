import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  genders = ['male', 'female', 'other'];
  myForm!: FormGroup;
  forbiddenUsernames: string[] =  ['PK', 'Pratham'];
  

  ngOnInit(): void {
    // this.myForm = new FormGroup({
    //   username: new FormControl(null),
    //   email: new FormControl(null),
    //   gender: new FormControl('male')
    // });

    this.myForm = new FormGroup({
      userData: new FormGroup({
        username: new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
        email: new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmails),
      }),      
      gender: new FormControl('male'),
      hobbies: new FormArray([])
    });

    // this.myForm.setValue({
    //   userData: {
    //     username: 'P',
    //     email: 'abc@xyz.com'
    //   },
    //   'gender': 'male',
    //   hobbies: []
    // });

    // this.myForm.patchValue({
    //   userData: {
    //     username: 'Abc'
    //   },
    //   gender: 'female'
    // });
    
  }

  onSubmit(){
    console.log(this.myForm);
    //this.myForm.controls['gender'].setValue('female');
    this.myForm.reset();
  }

  forbiddenNames(control: FormControl) : {[s: string]: boolean} | null{
    if(this.forbiddenUsernames.indexOf(control.value) !== -1){
      return {'nameIsForbidden': true};
    }
    return null;
  }

  forbiddenEmails(control: any): Promise<any> | Observable<any>{
    const promise = new Promise<any>((resolve, reject) =>{
      setTimeout(() => {
        if(control.value === 'a@b.com'){
          resolve({'emailIsForbidden': true})
        }
        else{
          resolve(null);
        }
      }, 1500)
    });
    return promise;
  }

  onAddHobby(){
    (<FormArray>this.myForm.get('hobbies')).push(new FormControl(null, Validators.required));
  }

  getControls(){
    return (<FormArray>this.myForm.get('hobbies')).controls;
  }


}
