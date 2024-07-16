package com.ems.employeesystem.mapper;

import com.ems.employeesystem.dto.EmployeeDto;
import com.ems.employeesystem.entity.Employee;

public class EmployeeMapper {

    //Converts EmployeeDto to Employee
    public static EmployeeDto mapToEmployeeDto(Employee employee){
        return new EmployeeDto(
            employee.getId(),
            employee.getFirstName(),
            employee.getLastName(),
            employee.getEmail()
        );
    }


    //Converts Employee to EmployeeDto
    public static Employee mapToEmployee(EmployeeDto employeeDto){
        return new Employee(
            employeeDto.getId(), 
            employeeDto.getFirstName(),
            employeeDto.getLastName(), 
            employeeDto.getEmail()
        );
    }

}
