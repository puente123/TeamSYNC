package com.ems.employeesystem.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

/**
 * Employee Class
 * Entity class representing an Employee in the employee management system.
 * This class is mapped to the "employees" table in the MySQL database.
 * 
 * <p>
 * It uses Lombok annotations to generate getters, setters, and constructors.
 * The class is also annotated with JPA annotations
 * to define the table and column mappings in MySQL
 * </p>
 * 
 * <p>
 * The fields include:
 * <ul>
 * <li>id: Unique Identifier for the employee. Primary key and auto-generated</li>
 * <li>firstName: Employee's first name mapped to the first_name column in database</li>
 * <li>lastName: Employee's last name mapped to the last_name column in database</li>
 * <li>email: Employee's email address mapped to the email_id column in database, must be unique and not null</li>
 * </ul>
 * </p>
 * 
 * @version 1.0
 * @since 2024-07-12
 * @author Osbaldo Puente Cerda
 */
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "employees")
public class Employee {


    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "first_name")
    private String firstName;

    @Column(name = "last_name")
    private String lastName;

    @Column(name = "email_id", nullable = false, unique = true)
    private String email;

}
