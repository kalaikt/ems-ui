import { ActionReducerMap } from '@ngrx/store';
import { EmployeeState, employeeReducer } from './employee/employee.reducer';

export interface AppState {
  employee: EmployeeState;
}

export const reducers: ActionReducerMap<AppState> = {
  employee: employeeReducer,
};
