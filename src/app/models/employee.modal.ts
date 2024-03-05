export interface Employee {
  employeeId?: number;
  depId: number;
  barcode: string;
  firstName: string;
  middleName?: string;
  lastName: string;
  dateOfBirth: string;
  email: string;
  password: string;
  mobile: string;
  photo: string;
  address: string;
  city: string;
  state: string;
  zipcode: string;
  country: string;
  status: string;
  createdBy?: string;
  createdDate?: string;
  modifiedBy?: string;
  modifiedDate?: string;
}
