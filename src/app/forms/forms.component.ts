import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  firstFormGroup!:FormGroup
  secondFormGroup!:FormGroup
  isLinear = false;
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
      emailCtrl:['',[Validators.required,Validators.email]],
      city:['',Validators.required],
      language:['',Validators.required]
    });
    
  this.secondFormGroup = this._formBuilder.group({
    fname:['',Validators.required],
    lname:['',Validators.required],
    userCtrl:['',Validators.required],
    textCtrl:['',Validators.required],
  });

  }

}
