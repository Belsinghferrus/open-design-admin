import React, { useState } from 'react'
import Register from '../Components/Register'
import Login from '../Components/Login'

const LoginPage = () => {

  const [isLogin, setIsLogin] = useState(true)

  return (
    <div className='login-page'>
      <div className='login-card w-1/3 mx-auto mt-20 bg-white shadow-lg rounded-lg p-8'>
        
    {isLogin ? (
      <div>
        <Login />
          <p>Don't have an account?</p>
          <a onClick={() =>  setIsLogin(false)} className='text-blue-500 hover:underline cursor-pointer'>Register here</a>
        </div>
    ) : (
      <div>
        <Register />
        <p>Already have an account?</p>
        <a onClick={() => setIsLogin(true)} className='text-blue-500 hover:underline cursor-pointer'>Login here</a>
      </div>
    )}
      </div>
    </div>
  )
}

export default LoginPage
