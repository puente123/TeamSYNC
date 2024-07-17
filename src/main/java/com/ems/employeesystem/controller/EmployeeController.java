package com.ems.employeesystem.controller;

import java.util.List;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ems.employeesystem.dto.EmployeeDto;
import com.ems.employeesystem.service.EmployeeService;

import lombok.AllArgsConstructor;

@AllArgsConstructor
@RestController
@RequestMapping("/api/employees")
public class EmployeeController {

    private EmployeeService employeeService;

    //Build Add Employee REST API
    //Create Method
    //Annotate it with Spring Boot
    @PostMapping
    public ResponseEntity<EmployeeDto> createEmployee(@RequestBody EmployeeDto employeeDto){
        EmployeeDto savedEmployee = employeeService.createEmployee(employeeDto);
        return new ResponseEntity<>(savedEmployee, HttpStatus.CREATED);
    }
 
    /*
     *
     * Be careful when using GetMapping and PathVariable together
     * if you do GetMapping("/{id}") and (@PathVariable Long id) ----- id name must be the same in both (This is acceptable but bad practice)
     * GetMapping("/{id}") and (@PathVariable Long employeeId) ----- This is WRONG
     * GetMapping("/{id}") and (@PathVariable("id") Long employeeId) ----- This is correct and better practice. "employeeId" can be any name in this case
     * 
     */
    @GetMapping("/{id}")
    public ResponseEntity<EmployeeDto> getEmployee(@PathVariable("id") Long employeeId){
        EmployeeDto savedEmployee = employeeService.getEmployeeById(employeeId);
        return new ResponseEntity<>(savedEmployee, HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity<List<EmployeeDto>> getAllEmployees() {
        List<EmployeeDto> employees = employeeService.getAllEmployees();
        return new ResponseEntity<>(employees, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteEmployee(@PathVariable("id") Long employeeId){
        employeeService.deleteEmployeeById(employeeId);
        return new ResponseEntity<>("Employee Succesfully Deleted", HttpStatus.OK);
    }

    @PutMapping("/{id}")
    public ResponseEntity<EmployeeDto> updateEmployee(@RequestBody EmployeeDto employeeDto, @PathVariable("id") Long employeeId){
        EmployeeDto updatedEmployee = employeeService.updateEmployee(employeeDto, employeeId);
        return new ResponseEntity<>(updatedEmployee, HttpStatus.OK);
    }

}
