
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface CreateDepartmentInput {
    description?: Nullable<string>;
    name: string;
}

export interface CreateEmployeeInput {
    address?: Nullable<string>;
    departmentId: number;
    firstName: string;
    hireDate: string;
    isActive: boolean;
    lastName: string;
    phone?: Nullable<string>;
}

export interface UpdateDepartmentInput {
    id: number;
}

export interface UpdateEmployeeInput {
    address?: Nullable<string>;
    departmentId?: Nullable<number>;
    firstName?: Nullable<string>;
    hireDate?: Nullable<string>;
    id: number;
    isActive?: Nullable<boolean>;
    lastName?: Nullable<string>;
    phone?: Nullable<string>;
}

export interface Department {
    description?: Nullable<string>;
    employees?: Nullable<Nullable<Employee>[]>;
    id: number;
    name: string;
}

export interface DepartmentHistory {
    department: Department;
    departmentId: number;
    employee: Employee;
    employeeId: number;
    id: number;
    startDate: string;
}

export interface Employee {
    address?: Nullable<string>;
    department?: Nullable<Department>;
    departmentHistory?: Nullable<Nullable<DepartmentHistory>[]>;
    departmentId: number;
    firstName: string;
    hireDate: string;
    id: number;
    isActive: boolean;
    lastName: string;
    phone?: Nullable<string>;
}

export interface IMutation {
    createDepartment(createDepartmentInput: CreateDepartmentInput): Department | Promise<Department>;
    createEmployee(createEmployeeInput: CreateEmployeeInput): Employee | Promise<Employee>;
    removeDepartment(id: number): Nullable<Department> | Promise<Nullable<Department>>;
    removeEmployee(id: number): Nullable<Employee> | Promise<Nullable<Employee>>;
    updateDepartment(updateDepartmentInput: UpdateDepartmentInput): Department | Promise<Department>;
    updateEmployee(updateEmployeeInput: UpdateEmployeeInput): Employee | Promise<Employee>;
}

export interface IQuery {
    getDepartment(id: number): Nullable<Department> | Promise<Nullable<Department>>;
    getDepartments(): Nullable<Department>[] | Promise<Nullable<Department>[]>;
    getEmployee(id: number): Nullable<Employee> | Promise<Nullable<Employee>>;
    getEmployees(): Nullable<Employee>[] | Promise<Nullable<Employee>[]>;
}

type Nullable<T> = T | null;
