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
 * Entity class representing an Employee in the employee management system.
 * This class is mapped to the "employees" table in the database.
 * 
 * <p>
 * It uses Lombok annotations to generate boilerplate code such as getters,
 * setters, and constructors. The class is also annotated with JPA annotations
 * to define the table and column mappings.
 * </p>
 * 
 * <p>
 * The fields include:
 * <ul>
 * <li>id: Primary key, auto-generated</li>
 * <li>firstName: Employee's first name</li>
 * <li>lastName: Employee's last name</li>
 * <li>email: Employee's email address, must be unique and not null</li>
 * </ul>
 * 
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

    /**
     * The unique identifier for the employee.
     * This is the primary key and is auto-generated.
     */
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    /**
     * The first name of the employee.
     * Mapped to the "first_name" column in the database.
     */
    @Column(name = "first_name")
    private String firstName;

    /**
     * The last name of the employee.
     * Mapped to the "last_name" column in the database.
     */
    @Column(name = "last_name")
    private String lastName;

    /**
     * The email address of the employee.
     * Mapped to the "email_id" column in the database.
     * This field is not nullable and must be unique.
     */
    @Column(name = "email_id", nullable = false, unique = true)
    private String email;
}
