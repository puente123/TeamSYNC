package com.ems.employeesystem.respository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.ems.employeesystem.entity.Employee;



/**
 * Jpa Repository provides methods to perform CRUD (Create, Read, Update, Delete) operations
 * save(Employee)
 * findById(id)
 * findAll()
 * deleteById(id)
 * 
 * This Respository is used to easily interact with the database
 */
public interface EmployeeRepository extends JpaRepository<Employee, Long>{

}
