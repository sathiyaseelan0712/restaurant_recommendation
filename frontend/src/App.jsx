import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./components/Home"
import AdminPage from "./components/Adminpage";
import Register from "./components/Register";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/adminpage" element={<AdminPage />} />
        <Route path='/register' element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;