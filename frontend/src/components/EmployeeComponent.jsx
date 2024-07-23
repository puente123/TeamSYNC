import React from 'react'

const EmployeeComponent = () => {
  return (
    <div>
        <h1>Inserting New Employee</h1>
        <label>
            Employee First Name: <input name="firstNameInput" />
            Employee Last Name: <input name="lastNameInput" />
            Employee Email: <input name="emailInput" />
        </label>
    </div>
  )
}

export default EmployeeComponent