import axios from 'axios';

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/employees";

const getEmployees = () => {
   return axios.get(EMPLOYEE_API_BASE_URL)
};

const postEmployee = () => {
    
}


export {
    getEmployees
}