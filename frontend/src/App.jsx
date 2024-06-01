import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./components/Home"
import Navbar from "./components/Navbar";
import AdminPage from "./components/Adminpage";

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/adminpage" element={<AdminPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;