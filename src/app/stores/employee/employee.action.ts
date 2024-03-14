import { createAction, props } from '@ngrx/store';
import { ActionType } from '../action.types';
import { Employee } from '../../models/employee.modal';
import { HttpErrorResponse } from '@angular/common/http';

export const createEmployee = createAction(
  ActionType.CREATE_EMPLOYEE,
  props<{ employee: Employee }>
);

export const createEmployeeSuccess = createAction(
  ActionType.CREATE_EMPLOYEE_SUCCESS,
);

export const createEmployeeFailure = createAction(
  ActionType.CREATE_EMPLOYEE_ERROR,
  props<{ error: HttpErrorResponse }>
);

export const fetchEmployee = createAction(ActionType.FETCH_EMPLOYEE);

export const fetchEmployeeSuccess = createAction(
  ActionType.FETCH_EMPLOYEE_SUCCESS,
  props<{ payload: Employee[] }>
);

export const fetchEmployeeFailure = createAction(
  ActionType.FETCH_EMPLOYEE_ERROR,
  props<{ error: HttpErrorResponse }>
);

export const searchEmployee = createAction(
  ActionType.SEARCH_EMPLOYEE,
  props<{ keyword: string }>
);

export const searchEmployeeSuccess = createAction(
  ActionType.SEARCH_EMPLOYEE_SUCCESS,
  props<{ payload: Employee[] }>
);

export const searchEmployeeFailure = createAction(
  ActionType.SEARCH_EMPLOYEE_ERROR,
  props<{ error: HttpErrorResponse }>
);

export const updateEmployee = createAction(
  ActionType.UPDATE_EMPLOYEE,
  props<{ payload: Employee }>
);
export const updateEmployeeSuccess = createAction(
  ActionType.UPDATE_EMPLOYEE_SUCCESS,
  props<{ payload: Employee }>
);
export const updateEmployeeFailure = createAction(
  ActionType.UPDATE_EMPLOYEE_ERROR,
  props<{ error: HttpErrorResponse }>
);
export const deleteEmployee = createAction(
  ActionType.DELETE_EMPLOYEE,
  props<{ payload: Employee }>
);
