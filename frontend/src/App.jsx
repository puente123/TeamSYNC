import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ListEmployeeComponent from './components/ListEmployeeComponent'
import NavbarHeader from './components/HeaderComponent'
import EmployeeComponent from './components/EmployeeComponent'
import FooterComponent from './components/FooterComponent'
import ErrorPageComponent from './components/ErrorPageComponent'

function App() {
  
  return (
    <BrowserRouter>
      <NavbarHeader/>
        <Routes>
          <Route path = "/" element= {<ListEmployeeComponent/>} />
          <Route path = "/employees" element= {<ListEmployeeComponent/>} />
          <Route path = "/add-employee" element= {<EmployeeComponent/>} />
          <Route path = "*" element={<ErrorPageComponent/>} />
        </Routes>
      <FooterComponent/>
    </BrowserRouter>
  )
}

export default App
