package com.ems.employeesystem.service;

import java.util.List;

import com.ems.employeesystem.dto.EmployeeDto;
import com.ems.employeesystem.entity.Employee;

public interface EmployeeService {

    EmployeeDto createEmployee(EmployeeDto employeeDto);
    List<Employee> getEmployees();
}
