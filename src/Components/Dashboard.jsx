import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/api/projects")
      .then(response => setProjects(response.data))
      .catch(error => console.error("Error fetching projects:", error));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Project Dashboard</h1>
      <Link to="/add-project" className="bg-blue-500 text-white px-4 py-2 rounded">Add Project</Link>
      
      <div className="mt-4">
        {projects.map(project => {
          return (
            <div key={project.id} className="border p-4 rounded mb-2">
              <div>
                <h2 className="font-semibold">{project.name}</h2>
                <p>{project.category} - {project.location}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Dashboard;
