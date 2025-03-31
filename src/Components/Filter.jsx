import React from 'react'

const Filter = () => {
  return (
    <div className='filter-bar flex flex-row gap-10 items-baseline'>
    
        <input type='text' className='w-full px-3 py-2 border rounded' placeholder='Filter...' />
      <select className='ml-2 px-4 py-2 border border-gray-300 rounded bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500'>
        <option value='name'>Name</option>
        <option value='category'>Category</option>
        <option value='location'>Location</option>
        <option value='amenities'>Amenities</option>

      </select>
      <button className='bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600'>Filter</button>
    </div>
  )
}

export default Filter
