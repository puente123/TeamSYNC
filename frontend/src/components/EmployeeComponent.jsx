import React from 'react'
import { useState } from 'react'
import { postEmployee } from '../services/EmployeeService'
import { useNavigate } from 'react-router-dom'


const EmployeeComponent = () => {

    const navigate = useNavigate();

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

        //const navigate = useNavigate();
        
        const employeeData = {
            firstName: firstName,
            lastName: lastName,
            email: email
        }

        //I didnt use this because the POST method was already defined in the postEmployee function in EmployeeService
        /*const employee = {
            method: "POST",
            body: JSON.stringify(employeeData)
        } */

        try{
            const response = await postEmployee(employeeData)
            console.log(response.status);
            navigate("/")
        }catch(error){
            console.log(error)
        }
        
        
    }

  /*return (
    <div>
        <h1>Inserting New Employee</h1>
        <label>
            Employee First Name: <input name="firstNameInput" value={firstName} onChange={handleChange}/>
            Employee Last Name: <input name="lastNameInput" value={lastName} onChange={handleChange}/>
            Employee Email: <input name="emailInput" value={email} onChange={handleChange}/>
        </label>
        <button onClick={onConfirmClick} type="button" className="btn btn-primary">Confirm Employee Entry</button>
    </div>
  )*/
    return (
        <div>
            <h1>Inserting New Employee</h1>
            <div>
                <label htmlFor="firstNameInput">Employee First Name:</label>
                <input id="firstNameInput" name="firstNameInput" value={firstName} onChange={handleChange}/>
            </div>
            <div>
                <label htmlFor="lastNameInput">Employee Last Name:</label>
                <input id="lastNameInput" name="lastNameInput" value={lastName} onChange={handleChange}/>
            </div>
            <div>
                <label htmlFor="emailInput">Employee Email:</label>
                <input id="emailInput" name="emailInput" value={email} onChange={handleChange}/>
            </div>
            <button onClick={onConfirmClick} type="button" className="btn btn-primary">Confirm Employee Entry</button>
        </div>
    );
}

export default EmployeeComponent