import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee.modal';
import { environment } from '../../environments/environment';
import { ResponseBody } from '../models/response-body.modals';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  env = environment;

  constructor(private httpClient: HttpClient) {}

  getEmployeesList(): Observable<ResponseBody<Employee[]>> {
    return this.httpClient.get<ResponseBody<Employee[]>>(
      `${this.env.basePath}/${this.env.endpoint.employee}`
    );
  }

  createEmployee(employee: Employee): Observable<ResponseBody<Employee>> {
    return this.httpClient.post<ResponseBody<Employee>>(
      `${this.env.basePath}/${this.env.endpoint.employee}`,
      employee
    );
  }

  getEmployeeById(id: number): Observable<ResponseBody<Employee>> {
    return this.httpClient.get<ResponseBody<Employee>>(
      `${this.env.basePath}/${this.env.endpoint.employee}/${id}`
    );
  }

  updateEmployee(id: number, employee: Employee): Observable<ResponseBody<Employee>> {
    return this.httpClient.put<ResponseBody<Employee>>(
      `${this.env.basePath}/${this.env.endpoint.employee}/${id}`,
      employee
    );
  }

  deleteEmployee(id: number): Observable<Object> {
    return this.httpClient.delete(
      `${this.env.basePath}/${this.env.endpoint.employee}/${id}`
    );
  }
}
