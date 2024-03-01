import { Component } from '@angular/core';
import { Employee } from '../employee.modal';
import { EmployeeService } from '../../shared/employee.service';

@Component({
  selector: 'app-manage-employee',
  templateUrl: './manage-employee.component.html',
  styleUrl: './manage-employee.component.scss',
})
export class ManageEmployeeComponent {
  editMode: boolean = false;
  employees: Employee[] = [];
  selectedEmp: Employee = {} as Employee;

  constructor(private empService: EmployeeService) {}

  setMode() {
    this.editMode = !this.editMode;
  }

  ngOnInit(): void {
    this.getEmployees();
  }

  private getEmployees() {
    this.empService.getEmployeesList().subscribe((data) => {
      this.employees = data;
    });
  }

  updateEmployee(emp: Employee) {
    this.selectedEmp = emp;
  }

  deleteEmployee(id: number) {
    this.empService.deleteEmployee(id).subscribe((data) => {
      console.log(data);
      this.getEmployees();
    });
  }

  save(emp: Employee) {
    this.empService.createEmployee(emp).subscribe((d) => {
      this.setMode();
    });
  }
}
