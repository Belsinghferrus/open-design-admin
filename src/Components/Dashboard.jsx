import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FaEdit, FaTrash, FaEye } from "react-icons/fa";


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
        {projects.map(project => (
          <div key={project.id} className="border p-4 rounded mb-2 flex justify-between items-center">
            <div> 
              <h2 className="font-semibold">{project.name}</h2>
              <p>{project.category} - {project.location}</p>
            </div>

            {/* EDIT OPTIONS */}
            <div className="flex items-center justify-end space-x-4 p-4 bg-white ">
              <ul className="flex space-x-6">
                <li className="cursor-pointer text-blue-500 hover:text-blue-700">
                  <FaEye size={20} />
                </li>
                <li className="cursor-pointer text-yellow-500 hover:text-yellow-700">
                  <FaEdit size={20} />
                </li>
                <li className="cursor-pointer text-red-500 hover:text-red-700">
                  <FaTrash size={20} />
                </li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
