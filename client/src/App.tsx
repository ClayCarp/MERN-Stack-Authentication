import "./styles/General.css";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login";
import { Home } from "./pages/Home";
import { Register } from "./pages/Register";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Register" element={<Register/>} />
          <Route path="/Login" element={<Login/>} />
          <Route path="/Home" element={<Home/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App;
