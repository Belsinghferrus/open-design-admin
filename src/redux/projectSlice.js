import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const API_URL = "http://localhost:4000/api/projects";


const getAuthHeader = () => ({
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  });


export const fetchProject = createAsyncThunk(
  "projects/fetchProjects",
  async (_, { rejectWithValue }) => {
    try {
      const authHeader = getAuthHeader();
      console.log("🚀 Sending Headers:", authHeader); // Debugging headers

      const response = await axios.get(API_URL, authHeader);
      return response.data;
    } catch (error) {
      console.error("❌ Error Fetching Projects:", error.response?.data || error);
      return rejectWithValue(error.response?.data || "Unknown Error");
    }
  }
);


  export const fetchProjectById = createAsyncThunk(
    "projects/fetchProjectById",
    async (id, { rejectWithValue }) => {
      try {
        const response = await axios.get(`${API_URL}/${id}`, getAuthHeader());
        return response.data;
      } catch (error) {
        return rejectWithValue(error.response.data);
      }
    }
  );

  export const addProject = createAsyncThunk(
    "projects/addProject",
    async (projectData, { rejectWithValue }) => {
      try {
        const response = await axios.post(API_URL, projectData, getAuthHeader());
        return response.data;
      } catch (error) {
        return rejectWithValue(error.response.data);
      }
    }
  );

  export const updateProject = createAsyncThunk(
    "projects/updateProject",
    async ({ id, updatedData }, { rejectWithValue }) => {
      try {
        const response = await axios.put(
          `${API_URL}/${id}`,
          updatedData,
          getAuthHeader()
        );
        return response.data;
      } catch (error) {
        return rejectWithValue(error.response.data);
      }
    }
  );

  export const deleteProject = createAsyncThunk(
    "projects/deleteProject",
    async (id, { rejectWithValue }) => {
      try {
        await axios.delete(`${API_URL}/${id}`, getAuthHeader());
        return id; // Return deleted project ID
      } catch (error) {
        return rejectWithValue(error.response.data);
      }
    }
  );

  const projectSlice = createSlice({
    name: "projects",
    initialState: {
      projects: [],
      selectedProject: null,
      isLoading: false,
      error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
      builder
        // Fetch All Projects
        .addCase(fetchProject.pending, (state) => {
          state.isLoading = true;
          state.error = null;
        })
        .addCase(fetchProject.fulfilled, (state, action) => {
          state.isLoading = false;
          state.projects = action.payload;
        })
        .addCase(fetchProject.rejected, (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        })
  
        // Fetch Single Project
        .addCase(fetchProjectById.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(fetchProjectById.fulfilled, (state, action) => {
          state.isLoading = false;
          state.selectedProject = action.payload;
        })
        .addCase(fetchProjectById.rejected, (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        })
  
        // Add Project
        .addCase(addProject.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(addProject.fulfilled, (state, action) => {
          state.isLoading = false;
          state.projects.push(action.payload);
        })
        .addCase(addProject.rejected, (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        })
  
        // Update Project
        .addCase(updateProject.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(updateProject.fulfilled, (state, action) => {
          state.isLoading = false;
          state.projects = state.projects.map((project) =>
            project.id === action.payload.id ? action.payload : project
          );
        })
        .addCase(updateProject.rejected, (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        })
  
        // Delete Project
        .addCase(deleteProject.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(deleteProject.fulfilled, (state, action) => {
          state.isLoading = false;
          state.projects = state.projects.filter(
            (project) => project.id !== action.payload
          );
        })
        .addCase(deleteProject.rejected, (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        });
    },
  });
  
  export default projectSlice.reducer;
  