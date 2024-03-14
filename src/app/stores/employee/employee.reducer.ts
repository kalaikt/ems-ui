import { Action, createReducer, on } from '@ngrx/store';
import { Employee } from '../../models/employee.modal';
import {
  createEmployee,
  createEmployeeFailure,
  createEmployeeSuccess,
} from './employee.action';
import { HttpErrorResponse } from '@angular/common/http';

export interface EmployeeState {
  employees: Employee[];
  hasError: boolean;
  isLoading: boolean;
  message: string;
  totalEmployees?: number;
  error?: HttpErrorResponse;
}

export const initialState: EmployeeState = {
  employees: [],
  hasError: false,
  isLoading: false,
  message: '',
  error: {} as HttpErrorResponse,
};

export const employeeReducer = createReducer(
  initialState,
  on(createEmployee, (state) => {
    return {
      ...state,
      isLoading: true,
      hasError: false,
    };
  }),
  on(createEmployeeSuccess, (state) => {
    return {
      ...state,
      isLoading: false,
      hasError: false,
    };
  }),
  on(createEmployeeFailure, (state, { _p: { error } }) => {
    return {
      ...state,
      isLoading: false,
      hasError: true,
      error,
    };
  })
);
