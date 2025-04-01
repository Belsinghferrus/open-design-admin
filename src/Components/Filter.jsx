import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProject } from '../redux/projectSlice';

const Filter = () => {

  const dispatch = useDispatch()

  const { projects, isLoading } = useSelector((state) => state.projects);

  const [filterType, setFilterType] = useState('name'); // Default filter
  const [searchQuery, setSearchQuery] = useState(''); 


  useEffect(() => {
    dispatch(fetchProject({})); // Load all projects initially
  }, [dispatch]);

  const handleClick = () => {
    const queryParams = { [filterType]: searchQuery };
    dispatch(fetchProject(queryParams)); // Fetch with filter
  };
  return (
    <div className='filter-bar flex flex-row gap-5 items-baseline'>

      <input onChange={(e) => setSearchQuery(e.target.value)} type='text' className='w-full px-3 py-2 border rounded' placeholder='Filter...' />
      <select onChange={(e) => setFilterType(e.target.value)} className='ml-2 px-4 py-2 border border-gray-300 rounded bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500'>
        <option value='name'>Name</option>
        <option value='category'>Category</option>
        <option value='location'>Location</option>
        <option value='amenities'>Amenities</option>
      </select>
      <button onClick={handleClick} className='bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600'>Filter</button>
    </div>
  )
}

export default Filter
