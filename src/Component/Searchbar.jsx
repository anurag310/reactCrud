import React, { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { words } from '../lib/data';

const Searchbar = () => {
  const [activeSearch, setActiveSearch] = useState([]);

  const handleSearch = (e) => {
    if (e.target.value === '') {
      setActiveSearch([]);
      return false;
    }
    setActiveSearch(words.filter((w) => w.includes(e.target.value)).slice(0, 8));
  };

  return (
    <form className='max-w-screen-md mx-auto relative'>
      <div className='relative  ml-20 mb-4 sm:mb-20 top-0'>
    <input
          type='search'
          placeholder='Type Here'
          className='w-full p-2 sm:p-4 rounded-full bg-slate-800'
          onChange={(e) => handleSearch(e)}
        />
        
        <button className='absolute right-1 top-1/2 -translate-y-1/2 p-2 sm:p-4 bg-slate-900 rounded-full' >
            <AiOutlineSearch />
        </button>
      </div>
      {activeSearch.length > 0 && (
        <div className='absolute top-20 p-2 sm:p-4 bg-slate-800 text-white w-full rounded-xl left-1/2 -translate-x-1/2 flex flex-col gap-2'>
          {activeSearch.map((s, index) => (
            // eslint-disable-next-line react/jsx-key
            <span key={index}>{s}</span>
          ))}
        </div>
      )}
    </form>
  );
};

export default Searchbar;
