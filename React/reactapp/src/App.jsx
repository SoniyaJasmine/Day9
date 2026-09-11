import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TaskProvider } from "./context/TaskContext";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About"

function App() {
 return (
  <TaskProvider>
 <BrowserRouter>
 <Navbar />
 <Routes>
 <Route path="/" element={<Home />} />
 <Route path="/about" element={<About />} />
 </Routes>
 </BrowserRouter>
 </TaskProvider>
 );
}

export default App;