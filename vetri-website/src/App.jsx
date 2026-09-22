import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Solution from "./pages/Solution";
import Services from "./pages/Service";
import Contact from "./pages/Contact";
import Footer from "./component/Footer";


function App() {
  return (
    <BrowserRouter>

        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/solution" element={<Solution />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact /> } />
        </Routes>

        <Footer />
    </BrowserRouter>
  );
}

export default App;
