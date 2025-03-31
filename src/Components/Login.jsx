import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import {useNavigate} from 'react-router-dom'
import {loginUser} from '../redux/authSlice'


const Login = () => {

const [email, setEmail] = useState('');
const [password, setPassword] = useState("");
const dispatch = useDispatch();
const navigate = useNavigate();
const { loading, error, user } = useSelector((state) => state.auth);


  function handleSubmit(e) {
    e.preventDefault();
    dispatch(loginUser({ email, password })).then((result) => {
      if (result.meta.requestStatus === "fulfilled") {
        navigate("/"); 
      }
    });
  }


  return (
    <div>
      <h2 className='text-2xl font-bold text-center mb-6'>Login</h2>
      <form onSubmit={handleSubmit}>
          
          <div className='mb-4'>
            <label htmlFor='email' className='block text-gray-700'>Email</label>
            <input onChange={(e) => setEmail(e.target.value)} type='text' id='email' className='w-full px-3 py-2 border rounded' placeholder='Enter your username' />
          </div>
          <div className='mb-4'>
            <label htmlFor='password' className='block text-gray-700'>Password</label>
            <input onChange={(e) => setPassword(e.target.value)} type='password' id='password' className='w-full px-3 py-2 border rounded' placeholder='Enter your password' />
          </div>
          <button type='submit' className='w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600'>Login</button>
        </form>
    </div>
  )
}

export default Login
