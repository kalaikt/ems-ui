import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageEmployeeComponent } from './manage-employee/manage-employee.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { RouterModule } from '@angular/router';
import { routes } from './employee.routes';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeeService } from '../shared/employee.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    ManageEmployeeComponent,
    EmployeeFormComponent,
    EmployeeListComponent,
  ],
  imports: [
    CommonModule,
     RouterModule.forChild(routes),
     ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    ],

    providers: [EmployeeService],
})
export class EmployeeModule {}
