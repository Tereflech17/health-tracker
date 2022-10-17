import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-doctor-create',
  templateUrl: './doctor-create.component.html',
  styleUrls: ['./doctor-create.component.css']
})
export class DoctorCreateComponent implements OnInit {

  doctorForm!: FormGroup;
  firstName:string='';
  lastName:string='';
  address:string='';
  specialization:string='';
  specDescription:string='';


  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.doctorForm = this.formBuilder.group({
      'firstName': [null, Validators.required],
      'lastName': [null, Validators.required],
      'address': [null, Validators.required],
      'specialization': [null, Validators.required],
      'specDescription': [null, Validators.required]

    });
  }

  onFormSubmit(form:NgForm) {
      window.alert("Your doctor's information has been saved successfully!!!!")
  }

}
