package com.ems.employeesystem.service.impl;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.ems.employeesystem.dto.EmployeeDto;
import com.ems.employeesystem.entity.Employee;
import com.ems.employeesystem.exception.ResourceNotFoundException;
import com.ems.employeesystem.mapper.EmployeeMapper;
import com.ems.employeesystem.respository.EmployeeRepository;
import com.ems.employeesystem.service.EmployeeService;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class EmployeeServiceImpl implements EmployeeService {

    private EmployeeRepository employeeRepository;

    @Override
    public EmployeeDto createEmployee(EmployeeDto employeeDto) {

        Employee employee = EmployeeMapper.mapToEmployee(employeeDto);

        // Employee Repository was the class created to interact with the database
        // It was set up to import the CRUD operations
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

    @Override
    public EmployeeDto getEmployeeById(Long employeeId) {

        Employee employee = employeeRepository.findById(employeeId)
                .orElseThrow(
                        () -> new ResourceNotFoundException("Employee with this ID does NOT exist, ID: " + employeeId));

        return EmployeeMapper.mapToEmployeeDto(employee);
    }

    @Override
    public void deleteEmployeeById(Long employeeId) {

        boolean exists = employeeRepository.existsById(employeeId);

        if (!exists) {
            throw new ResourceNotFoundException("Employee with this ID does NOT exist, ID: " + employeeId);
        }

        employeeRepository.deleteById(employeeId);

    }

    @Override
    public List<EmployeeDto> getAllEmployees() {

        List<Employee> employees = employeeRepository.findAll();
        List<EmployeeDto> dtoEmployees = new ArrayList<>();
        for (Employee e : employees) {
            dtoEmployees.add(EmployeeMapper.mapToEmployeeDto(e));
        }

        return dtoEmployees;

    }

    @Override
    public EmployeeDto updateEmployee(EmployeeDto employeeDto, Long employeeId) {

        // Finds the employee we need to update in the database, and throws exception of
        // we do not find it
        Employee employeeOriginal = employeeRepository.findById(employeeId).orElseThrow(
                () -> new ResourceNotFoundException("Employee with this ID does NOT exist, ID: " + employeeId));

        //
        Employee employeeUpdated = EmployeeMapper.mapToEmployee(employeeDto);

        // Updates the information
        employeeOriginal.setEmail(employeeUpdated.getEmail());
        employeeOriginal.setFirstName(employeeUpdated.getFirstName());
        employeeOriginal.setLastName(employeeUpdated.getLastName());

        // Saves the updated information into the database,
        // This is important (ALWAYS REMEMBER TO UPDATE THE DATABASE)
        employeeRepository.save(employeeOriginal);

        return EmployeeMapper.mapToEmployeeDto(employeeOriginal);
    }

}
