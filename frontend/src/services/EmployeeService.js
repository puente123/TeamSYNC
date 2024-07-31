import axios from 'axios';
import ListEmployeeComponent from '../components/ListEmployeeComponent';

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/employees";

const getEmployees = () => {
   return axios.get(EMPLOYEE_API_BASE_URL)
};

const postEmployee = (employee) => {
    return axios.post(EMPLOYEE_API_BASE_URL, employee)
}


export {
    getEmployees,
    postEmployee
}