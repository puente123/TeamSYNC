import React, { useState, useEffect } from "react";
import { getEmployees } from "../services/EmployeeService";
import { useNavigate } from "react-router-dom";

const dummyData = [
  {
    id: 1,
    firstName: "Jorge",
    lastName: "Lopez",
    email: "jore@gmail.com",
  },
  {
    id: 2,
    firstName: "Enrique",
    lastName: "Juniorz",
    email: "juior@gmail.com",
  },
];

//Custom Components need to be capitalized to be recognized by React
const TableData = ({ data, onUpdateEmployeeClick, onDeleteEmployeeClick }) => {
  return (
    <tbody>
      {data.map((employee) => (
        <tr key={employee.id}>
          <td>{employee.id}</td>
          <td>{employee.firstName}</td>
          <td>{employee.lastName}</td>
          <td>{employee.email}</td>
          <td>
            <button
              onClick={() => onUpdateEmployeeClick(employee.id)}
              type="button"
              className="btn btn-primary mr-1"
            >
              Update
            </button>

            <button
              onClick={() => onDeleteEmployeeClick(employee.id)}
              type="button"
              className="btn btn-danger"
            >
              Delete
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

const TableFormat = ({ data, onAddEmployeeClick, onDeleteEmployeeClick, onUpdateEmployeeClick }) => {
  return (
    <div className="container">
      <h2 className="text-center">List of Employees</h2>
      <button
        onClick={onAddEmployeeClick}
        type="button"
        className="btn btn-primary"
      >
        Add Employee
      </button>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Employee ID</th>
            <th>Employee First Name</th>
            <th>Employee Last Name</th>
            <th>Employee Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <TableData data={data} onDeleteEmployeeClick={onDeleteEmployeeClick} onUpdateEmployeeClick={onUpdateEmployeeClick}/>
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
    console.log("Add Employee Button Clicked");
    navigate("/add-employee");
  };

  const handleDeleteEmployee = (id) => {};

  const handleUpdateEmployee = (id) => {
    console.log("Update Employee Button Clicked");
    navigate(`/edit-employee/${id}`);
  };

  return (
    <TableFormat
      data={employees}
      onAddEmployeeClick={handleAddEmployeeClick}
      onDeleteEmployeeClick={handleDeleteEmployee}
      onUpdateEmployeeClick={handleUpdateEmployee}
    />
  );
};

export default ListEmployeeComponent;
