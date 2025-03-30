import React from 'react'

const Register = () => {
  return (
    <div>
      <form>
          <div className='mb-4'>
            <label htmlFor='username' className='block text-gray-700'>Username</label>
            <input type='text' id='username' className='w-full px-3 py-2 border rounded' placeholder='Enter your username' />
          </div>
          <div className='mb-4'>
            <label htmlFor='email' className='block text-gray-700'>Email</label>
            <input type='text' id='email' className='w-full px-3 py-2 border rounded' placeholder='Enter your username' />
          </div>
          <div className='mb-4'>
            <label htmlFor='password' className='block text-gray-700'>Password</label>
            <input type='password' id='password' className='w-full px-3 py-2 border rounded' placeholder='Enter your password' />
          </div>
          <button type='submit' className='w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600'>Login</button>
        </form>
    </div>
  )
}

export default Register
