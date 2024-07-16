package com.ems.employeesystem.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.ems.employeesystem.dto.EmployeeDto;
import com.ems.employeesystem.entity.Employee;
import com.ems.employeesystem.mapper.EmployeeMapper;
import com.ems.employeesystem.respository.EmployeeRepository;
import com.ems.employeesystem.service.EmployeeService;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class EmployeeServiceImpl implements EmployeeService{

    private EmployeeRepository employeeRepository;


    @Override
    public EmployeeDto createEmployee(EmployeeDto employeeDto) {

        Employee employee = EmployeeMapper.mapToEmployee(employeeDto);

        //Employee Repository was the class created to interact with the database
        //It was set up to import the CRUD operations
        Employee savedEmployee = employeeRepository.save(employee);

        
        return EmployeeMapper.mapToEmployeeDto(savedEmployee);
    }

    @Override
    public List<Employee> getEmployees() {

        return employeeRepository.findAll();

    }

    @Override
    public Optional<Employee> getEmployee(Long id) {
        
        return employeeRepository.findById(id);
    }

    @Override
    public void delete(Long id) {

        employeeRepository.deleteById(id);
        
    }

}
