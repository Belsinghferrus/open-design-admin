import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {useDispatch}  from 'react-redux'
import { addProject } from "../redux/projectSlice";

const AddProject = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    content: "",
    category: "",
    location: "",
    amenities: "",
    features: "",
    map_embed: "",
    image: null,
  });


  const dispatch = useDispatch();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    const projectData = {
      ...formData,
      amenities: formData.amenities.split(","), 
    };

    dispatch(addProject(projectData)).then((result) => {
      if (result.meta.requestStatus === "fulfilled") {
        navigate("/");
      }
    });
  };

  

  return (
    <div className="max-w-lg mx-auto bg-white p-6 shadow-md rounded-lg flex flex-col">
      <h1 className="text-2xl font-bold mb-4 text-center">Add New Project</h1>

      <form onSubmit={handleSubmit} className="space-y-4 flex flex-col">
        {/* Project Name */}
        <label className="flex flex-col">
          <span className="text-gray-700 font-semibold">Project Name:</span>
          <input
            type="text"
            name="name"
            placeholder="Enter project name"
            onChange={handleChange}
            className="border p-2 rounded focus:ring focus:ring-blue-300"
          />
        </label>

        {/* Content */}
        <label className="flex flex-col">
          <span className="text-gray-700 font-semibold">Content:</span>
          <textarea
            name="content"
            placeholder="Project details..."
            onChange={handleChange}
            className="border p-2 rounded h-28 focus:ring focus:ring-blue-300"
          />
        </label>

        {/* Category & Location */}
        <div className="flex flex-col md:flex-row gap-4">
          <label className="flex-1 flex flex-col">
            <span className="text-gray-700 font-semibold">Category:</span>
            <input
              type="text"
              name="category"
              placeholder="Enter category"
              onChange={handleChange}
              className="border p-2 rounded focus:ring focus:ring-blue-300"
            />
          </label>

          <label className="flex-1 flex flex-col">
            <span className="text-gray-700 font-semibold">Location:</span>
            <input
              type="text"
              name="location"
              placeholder="Enter location"
              onChange={handleChange}
              className="border p-2 rounded focus:ring focus:ring-blue-300"
            />
          </label>
        </div>

        {/* Image Upload */}
        <label className="flex flex-col">
          <span className="text-gray-700 font-semibold">Upload Image:</span>
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleImageChange}
            className="border p-2 rounded file:bg-blue-500 file:text-white file:rounded file:px-4 file:py-2"
          />
        </label>

        {/* Amenities */}
        <label className="flex flex-col">
          <span className="text-gray-700 font-semibold">Amenities (comma-separated):</span>
          <input
            type="text"
            name="amenities"
            placeholder="WiFi, Parking, Security..."
            onChange={handleChange}
            className="border p-2 rounded focus:ring focus:ring-blue-300"
          />
        </label>

        {/* Features */}
        <label className="flex flex-col">
          <span className="text-gray-700 font-semibold">Features:</span>
          <textarea
            name="features"
            placeholder="Enter project features..."
            onChange={handleChange}
            className="border p-2 rounded h-20 focus:ring focus:ring-blue-300"
          />
        </label>

        {/* Map Embed Code */}
        <label className="flex flex-col">
          <span className="text-gray-700 font-semibold">Map Embed Code:</span>
          <textarea
            name="map_embed"
            placeholder="<iframe>...</iframe>"
            onChange={handleChange}
            className="border p-2 rounded h-20 focus:ring focus:ring-blue-300"
          />
        </label>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2 rounded"
        >
          Submit Project
        </button>
      </form>
    </div>
  );
};

export default AddProject;
