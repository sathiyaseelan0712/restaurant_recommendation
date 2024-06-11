import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./components/Home"
import AdminPage from "./components/Adminpage";
import Register from "./components/Register";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/adminpage" element={<AdminPage />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;