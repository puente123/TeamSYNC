import React from 'react'
import { useState } from 'react'


const EmployeeComponent = () => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')


    /*
     * "event" is provided by the "onChange" event handler
     * We can access different elements using the event handler
     * event.target returns the DOM elements
     * in this case (name, value) within <"input"/>
    */
    const handleChange = (event) => {

        const { name, value } = event.target

        if (name == "firstNameInput"){
            console.log("First Name Edited")
            setFirstName(value)
        }
        else if (name == "lastNameInput"){
            console.log("Last Name Edited")
            setLastName(value)
        }
        else if (name == "emailInput"){
            console.log("Email Edited")
            setEmail(value)
        }
    }

    const onConfirmClick = async () => {
        
        const employeeData = {
            firstName: firstName,
            lastName: lastName,
            email: email
        }

        const employee = {
            method: "POST",
            body: JSON.stringify(employeeData)
        } 

        const response = await fetch("http://localhost:8080/api/employees",employee)
        console.log(response.status);

    }

  return (
    <div>
        <h1>Inserting New Employee</h1>
        <label>
            Employee First Name: <input name="firstNameInput" value={firstName} onChange={handleChange}/>
            Employee Last Name: <input name="lastNameInput" value={lastName} onChange={handleChange}/>
            Employee Email: <input name="emailInput" value={email} onChange={handleChange}/>
        </label>
        <button onClick={onConfirmClick} type="button" className="btn btn-primary">Confirm Employee Entry</button>
    </div>
  )
}

export default EmployeeComponent