import React, { useState, useEffect } from 'react'
import { getEmployees } from '../services/EmployeeService';
import { useNavigate } from 'react-router-dom';

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

const TableFormat = ({ data, onAddEmployeeClick }) => {
    return (
        <div className='container'>
            <h2 className='text-center'>List of Employees</h2>
            <button onClick={onAddEmployeeClick} type="button" className="btn btn-primary">Add Employee</button>
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

    const navigate = useNavigate();

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

    const handleAddEmployeeClick = () => {
        console.log ('Add Employee Button Clicked')
        navigate("/add-employee")
    }

    return <TableFormat data={employees} onAddEmployeeClick={handleAddEmployeeClick}/>;
};

export default ListEmployeeComponent;
