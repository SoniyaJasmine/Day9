import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

import Home from "./Home";
import Products from "./Products";
import Services from "./Services";
import "./App.css";

import Students from "./Students";
import StudentDetails from "./StudentDetails";

function App() {
  return (
    <BrowserRouter>

      <nav>
        <NavLink to="/" className={({isActive}) => (isActive ? "active" : "")} >Home</NavLink>
        <NavLink to="/products" className={({isActive}) => (isActive ? "active" : "")}>Products</NavLink>
        <NavLink to="/services" className={({isActive}) => (isActive ? "active" : "")}>Services</NavLink>
         <NavLink to="/students">Students</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/services" element={<Services />} />


        <Route path="/students" element={<Students />} />
        <Route path="/students/:id" element={<StudentDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
