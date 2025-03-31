import React from 'react'

const Search = () => {
  return (
    <div className='search-bar flex flex-row'>
      <input type='text' className='w-full px-3 py-2 border rounded' placeholder='Search...' />
      <button className='bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600'>Search</button>
      
    </div>
  )
}

export default Search
