import React from 'react'

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

const tableData = ({data}) =>{
    return (
            <tbody> 
                {
                    data.map(employee => 
                        <tr key={employee.id}>
                            <td>{employee.id}</td>
                            <td>{employee.firstName}</td>
                            <td>{employee.lastName}</td>
                            <td>{employee.email}</td>
                        </tr>
                    )
                }
            </tbody>
    )
};

const tableFormat = ({data}) => {
    
        <div>
            <h2>List of Employees</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Employee ID</th>
                            <th>Employee First Name</th>
                            <th>Employee Last Name</th>
                            <th>Employee Email</th>
                        </tr>
                    </thead>
                    <tableData data={dummyData}/>
                </table>
        </div>
    

};

const ListEmployeeComponent = () => {

  return (
    <div>
        <tableFormat data = {dummyData}/>
    </div>
  )
};

export default ListEmployeeComponent