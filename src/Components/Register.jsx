import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import {useNavigate} from 'react-router-dom'
import {registerUser} from '../redux/authSlice'

const Register = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, error } = useSelector((state) => state.auth);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser(formData)).then((result) => {
      if (result.meta.requestStatus === "fulfilled") {
        navigate("/");
      }
    });
  };
  
  return (
    <div>
      <h2 className='text-2xl font-bold text-center mb-6'>Register</h2>
      <form onSubmit={handleSubmit}>
          <div className='mb-4'>
            <label htmlFor='username' className='block text-gray-700'>Username</label>
            <input onChange={handleChange} type='text' id='username' className='w-full px-3 py-2 border rounded' placeholder='Enter your username' />
          </div>
          <div className='mb-4'>
            <label htmlFor='email' className='block text-gray-700'>Email</label>
            <input onChange={handleChange} type='text' id='email' className='w-full px-3 py-2 border rounded' placeholder='Enter your username' />
          </div>
          <div className='mb-4'>
            <label htmlFor='password' className='block text-gray-700'>Password</label>
            <input onChange={handleChange} type='password' id='password' className='w-full px-3 py-2 border rounded' placeholder='Enter your password' />
          </div>
          <button type='submit' className='w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600'>Login</button>
        </form>
    </div>
  )
}

export default Register
