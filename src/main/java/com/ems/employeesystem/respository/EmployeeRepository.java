package com.ems.employeesystem.respository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.ems.employeesystem.entity.Employee;

public interface EmployeeRepository extends JpaRepository<Employee, Long>{

}
