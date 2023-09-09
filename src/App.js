import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Nav from "./components/nav/nav"
import First from "./components/first/first"
import About from "./components/about_us/about_us"
import Donate from "./components/donate/donate"
import Well from "./components/well_being/well"
import Contact from "./components/contact/contact"

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<><Nav/><First/></>}></Route>
      <Route path="/about" element={<><Nav/><About/></>}></Route>
      <Route path="/contact" element={<><Nav/><Contact/></>}></Route>
      <Route path="/donate" element={<><Nav/><Donate/></>}></Route>
      <Route path="/well" element={<><Nav/><Well/></>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
