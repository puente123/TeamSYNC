import React from "react";
import { useState, useEffect } from "react";
import { postEmployee, getEmployee } from "../services/EmployeeService";
import { useNavigate, useParams } from "react-router-dom";

const EmployeeComponent = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  useEffect(() => {
    if (id) {
      const fetchEmployee = async () => {
        try {
          const response = await getEmployee(id);
          setFirstName(response.data.firstName);
          setLastName(response.data.lastName);
          setEmail(response.data.email);
        } 
        catch (error) {
          console.error("Failed to get employee data");
        }
      };

      fetchEmployee()
    }
  }, [id]);

  /*
   * "event" is provided by the "onChange" event handler
   * We can access different elements using the event handler
   * event.target returns the DOM elements
   * in this case (name, value) within <"input"/>
   */
  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name == "firstNameInput") {
      console.log("First Name Edited");
      setFirstName(value);
    } else if (name == "lastNameInput") {
      console.log("Last Name Edited");
      setLastName(value);
    } else if (name == "emailInput") {
      console.log("Email Edited");
      setEmail(value);
    }
  };

  function verifyInputs() {
    let valid = true;

    //... is known as the spread operator, {} is known as an object literal
    //CopyErrors creates an shallow copy of errors
    // Upkeeping immutability
    const copyErrors = { ...errors };

    //Verify first name text field is not blank
    if (firstName.trim() == "") {
      valid = false;
      copyErrors.firstName = "First Name is Required";
    } else {
      copyErrors.firstName = "";
    }

    //Verify last name text field is not blank
    if (lastName.trim() == "") {
      valid = false;
      copyErrors.lastName = "Last Name is Required";
    } else {
      copyErrors.lastName = "";
    }

    //Verify email name text field is not blank
    if (email.trim() == "") {
      valid = false;
      copyErrors.email = "Email is Required";
    } else {
      copyErrors.email = "";
    }

    //Update any errors that where found
    setErrors(copyErrors);
    return valid;
  }

  const onConfirmClick = async () => {
    //const navigate = useNavigate();

    if (verifyInputs()) {
      const employeeData = {
        firstName: firstName,
        lastName: lastName,
        email: email,
      };

      //I didnt use this because the POST method was already defined in the postEmployee function in EmployeeService
      /*const employee = {
                method: "POST",
                body: JSON.stringify(employeeData)
            } */

      try {
        const response = await postEmployee(employeeData);
        console.log(response.status);
        navigate("/");
      } catch (error) {
        console.log(error);
      }
    }
  };

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
  /*return (
    <div>
      <h1>Inserting New Employee</h1>
      <div>
        <label htmlFor="firstNameInput">Employee First Name:</label>
        <input
          id="firstNameInput"
          name="firstNameInput"
          value={firstName}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="lastNameInput">Employee Last Name:</label>
        <input
          id="lastNameInput"
          name="lastNameInput"
          value={lastName}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="emailInput">Employee Email:</label>
        <input
          id="emailInput"
          name="emailInput"
          value={email}
          onChange={handleChange}
        />
      </div>
      <button
        onClick={onConfirmClick}
        type="button"
        className="btn btn-primary"
      >
        Confirm Employee Entry
      </button>
    </div>
  );*/

  function tableTitle() {
    if (id) {
      return <h1 className="mb-4">Updating Employee</h1>;
    } else {
      return <h1 className="mb-4">Creating New Employee</h1>;
    }
  }

  return (
    <div className="container mt-5">
      {tableTitle()}
      <div className="form-group">
        <label htmlFor="firstNameInput">Employee First Name:</label>
        <input
          id="firstNameInput"
          name="firstNameInput"
          className="form-control"
          placeholder="Enter Employee's First Name"
          value={firstName}
          onChange={handleChange}
        />
        {errors.firstName && (
          <span style={{ color: "red" }}>{errors.firstName}</span>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="lastNameInput">Employee Last Name:</label>
        <input
          id="lastNameInput"
          name="lastNameInput"
          className="form-control"
          placeholder="Enter Employee's Last Name"
          value={lastName}
          onChange={handleChange}
        />
        {errors.lastName && (
          <span style={{ color: "red" }}>{errors.lastName}</span>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="emailInput">Employee Email:</label>
        <input
          id="emailInput"
          name="emailInput"
          className="form-control"
          placeholder="Enter Employee's Email"
          value={email}
          onChange={handleChange}
        />
        {errors.email && <span style={{ color: "red" }}>{errors.email}</span>}
      </div>
      <button
        onClick={onConfirmClick}
        type="button"
        className="btn btn-primary mt-3"
      >
        Confirm Employee Entry
      </button>
    </div>
  );
};

export default EmployeeComponent;
