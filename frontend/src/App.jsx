import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./components/Home"
import AdminPage from "./components/Adminpage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/adminpage" element={<AdminPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;