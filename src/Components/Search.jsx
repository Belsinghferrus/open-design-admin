import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { fetchProject } from '../redux/projectSlice';

const Search = () => {
  const dispatch = useDispatch();
  const [filters, setFilters] = useState({})

const handleChange = (e) => {
  setFilters((prev) => ({ ...prev, [e.target.name]: e.target.value }));

}

const handleSearch = () => {
  dispatch(fetchProject(filters));
};

  return (
    <div className='search-bar flex flex-row'>
      <input name="name"  onChange={handleChange} type='text' className='w-full px-3 py-2 border rounded' placeholder='Search...' />
      <button onClick={handleSearch} className='bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600'>Search</button>
      
    </div>
  )
}

export default Search
