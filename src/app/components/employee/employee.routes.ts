import { Routes } from '@angular/router';
import { ManageEmployeeComponent } from './manage-employee/manage-employee.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';

export const routes: Routes = [
  {
    path: '',
    component: ManageEmployeeComponent
  },
  {
    path: ':id',
    component: ManageEmployeeComponent
  },
  {
    path:'employee',
    component:EmployeeFormComponent
  }
];
