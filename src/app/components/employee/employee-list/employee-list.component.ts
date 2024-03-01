import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Employee } from '../employee.modal';
import { EmployeeService } from '../../shared/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ins-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.scss',
})
export class EmployeeListComponent {
  @Input() employees: Employee[] = [];
  @Output() edit: EventEmitter<Employee> = new EventEmitter<Employee>();
  @Output() delete: EventEmitter<number> = new EventEmitter<number>();

  deleteEmployee(id: number | undefined) {
    this.delete.emit(id);
  }
  updateEmployee(e: Employee) {
    this.edit.emit(e);
  }

  employeeDetails() {}
}
