import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Employee } from '../../../models/employee.modal';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'ins-employee-form',

  templateUrl: './employee-form.component.html',
  styleUrl: './employee-form.component.scss',
})
export class EmployeeFormComponent implements OnInit {
  @Output() setMode: EventEmitter<unknown> = new EventEmitter();
  @Output() save: EventEmitter<any> = new EventEmitter();
  @Input() empDetail: Partial<Employee> = {};

  form = new FormGroup({
    depId: new FormControl<number>(0, Validators.required),
    barcode: new FormControl(''),
    firstName: new FormControl('', Validators.required),
    middleName: new FormControl(''),
    lastName: new FormControl('', Validators.required),
    dateOfBirth: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    mobile: new FormControl('', Validators.required),
    photo: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    state: new FormControl('', Validators.required),
    zipcode: new FormControl('', Validators.required),
    country: new FormControl('', Validators.required),
    status: new FormControl('', Validators.required),
  });

  ngOnInit(): void {
    this.form.patchValue(this.empDetail);
  }
  cancel() {
    this.setMode.emit();
  }

  onSubmit() {
    if (this.form.invalid) return;

    this.save.emit(this.form.value);
  }
}
