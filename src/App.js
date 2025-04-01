import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import AddProjects from "./Pages/AddProjects";
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";
import {  useSelector } from "react-redux";

function App() {

const token = useSelector((state) => state.auth.token)





  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={token ? <HomePage /> : <Navigate to="/login" />} />
        <Route path="/add-project" element={<AddProjects />} />
      </Routes>
    </Router>
  );
}

export default App;
