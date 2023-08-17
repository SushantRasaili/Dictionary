import React from 'react'
import Search from "../images/Search.png";
import { useState } from 'react';

const SearchBar = ({submit}) => {


  const [query,setQuery] = useState("apple");

  const handleSubmit =(e) => {
    e.preventDefault();
    console.log(query)

    submit(query);
  }


  return (
    <div className='relative'>
      <form onSubmit={handleSubmit}>
      <input type="text" className='bg-gray-100 h-10 px-10 w-full rounded-xl focus:outline-none'
      value={query}
      onChange={(e) => setQuery(e.target.value)} /> 
      </form>
        <img src={Search} alt="search" className='absolute left-2 top-1/2 transform -translate-y-1/2'/>
    </div>
  )
}

export default SearchBar