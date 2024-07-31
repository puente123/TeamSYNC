import axios from 'axios';
import ListEmployeeComponent from '../components/ListEmployeeComponent';

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/employees";

const getEmployees = () => {
   return axios.get(EMPLOYEE_API_BASE_URL)
};

const postEmployee = (employee) => {
    return axios.post(EMPLOYEE_API_BASE_URL, employee)
}

const deleteEmployee = (employeeId) => {
    return axios.delete(EMPLOYEE_API_BASE_URL, {
        params: {
            id: employeeId
        }
    })
}


export {
    getEmployees,
    postEmployee,
    deleteEmployee
}