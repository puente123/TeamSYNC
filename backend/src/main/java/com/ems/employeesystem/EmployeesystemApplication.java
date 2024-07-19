package com.ems.employeesystem;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;


/**
 * Main class for the Employee Management System application.
 * 
 * <p>
 * This is the entry point for the Spring Boot application. It contains the main
 * method which uses {@link SpringApplication#run} to launch the application.
 * </p>
 * 
 * <p>
 * The {@code @SpringBootApplication} annotation enables auto-configuration,
 * component scanning, and configuration properties support in the application.
 * </p>
 * 
 * @version 1.0
 * @since 2024-07-12
 * @author Osbaldo Puente Cerda
 */
@SpringBootApplication
public class EmployeesystemApplication {

    /**
     * The main method which serves as the entry point for the Spring Boot application.
     * 
     * @param args command-line arguments passed to the application
     */
    public static void main(String[] args) {
        SpringApplication.run(EmployeesystemApplication.class, args);
    }
}