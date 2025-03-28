import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import AddProjects from "./Pages/AddProjects";
import HomePage from "./Pages/HomePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add-project" element={<AddProjects />} />
      </Routes>
    </Router>
  );
}

export default App;
