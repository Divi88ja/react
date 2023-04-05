import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Pages/Navigators";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Error from "./Pages/Error";

export default function App(){
  return<>
    <BrowserRouter>
     <Routes>
      <Route path="/" element={<Navbar />}>
         <Route path="/home"    element={<Home />} />
         <Route path="/about"   element={<About />} />
         <Route path="/contact" element={<Contact />} />
         <Route path="/*"       element={<Error />}/>
      </Route>
     </Routes>
  </BrowserRouter>
  </>
}