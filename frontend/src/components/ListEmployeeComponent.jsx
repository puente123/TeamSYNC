import React, { useState, useEffect } from 'react'
import { getEmployees } from '../services/EmployeeService';

const dummyData = [
    {
        "id": 1,
        "firstName": "Jorge",
        "lastName": "Lopez",
        "email": "jore@gmail.com"
    },
    {
        "id": 2,
        "firstName": "Enrique",
        "lastName": "Juniorz",
        "email": "juior@gmail.com"
    }
];



//Custom Components need to be capitalized to be recognized by React


const TableData = ({ data }) => {
    return (
        <tbody>
            {data.map(employee => (
                <tr key={employee.id}>
                    <td>{employee.id}</td>
                    <td>{employee.firstName}</td>
                    <td>{employee.lastName}</td>
                    <td>{employee.email}</td>
                </tr>
            ))}
        </tbody>
    );
};

const TableFormat = ({ data }) => {
    return (
        <div className='container'>
            <h2 className='text-center'>List of Employees</h2>
            <table className='table table-striped table-bordered'>
                <thead>
                    <tr>
                        <th>Employee ID</th>
                        <th>Employee First Name</th>
                        <th>Employee Last Name</th>
                        <th>Employee Email</th>
                    </tr>
                </thead>
                <TableData data={data} />
            </table>
        </div>
    );
};

const ListEmployeeComponent = () => {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        const fetchEmployees = async () => {
            try {
                const response = await getEmployees();
                setEmployees(response.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchEmployees();
    }, []);

    return <TableFormat data={employees} />;
};

export default ListEmployeeComponent;