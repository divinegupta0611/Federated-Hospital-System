import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Cancer from "./pages/Cancer";
import Diabetes from "./pages/Diabetes";
import Heart from "./pages/Heart";
import Kidney from "./pages/Kidney";
import Parkinsson from "./pages/Parkinsson";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cancer-detection" element={<Cancer />} />
        <Route path="/diabetes-detection" element={<Diabetes />} />
        <Route path="/heart-disease-detection" element={<Heart />} />
        <Route path="/kidney-disease-detection" element={<Kidney />} />
        <Route path="/parkinsson-detection" element={<Parkinsson />} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
