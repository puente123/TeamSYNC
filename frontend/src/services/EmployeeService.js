import axios from 'axios';

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/employees";

const getEmployees = async () => {
   return axios.get(EMPLOYEE_API_BASE_URL)
};


export {
    getEmployees
}