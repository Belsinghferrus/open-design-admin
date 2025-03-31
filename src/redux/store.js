import {configureStore} from '@reduxjs/toolkit';
import authSlice from './authSlice';
import projectReducer from "./projectSlice";


const store = configureStore({ 
    reducer: {
        auth: authSlice,
        projects: projectReducer,
    }

})

export default store