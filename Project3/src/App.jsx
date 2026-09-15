import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Services from "./Services";
import Projects from "./Projects";
import About from "./About"
import Contact from "./Contact";
import Footer from "./footer";
import "./App.css";

function App() {
  return (
    <BrowserRouter>

        <NavBar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact /> } />
        </Routes>

        <Footer />
    </BrowserRouter>
  );
}

export default App;
