import React, { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

const Searchbar = () => {
  const [input, setInput] = useState('');
  const [activeSearch, setActiveSearch] = useState([]);
  const [error, setError] = useState(null);

  const fetchData = (value) => {
    fetch(`http://localhost:5173/?query=${value}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((json) => {
        alert();
        setActiveSearch(json.results || []);
        setError(null);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setActiveSearch([]);
        setError('Error fetching data. Please try again later.');
      });
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setInput(value);
    // Debounce the fetchData function to avoid making a request on every keystroke
    setTimeout(() => {
      fetchData(value);
    }, 500);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the form from submitting and refreshing the page
    // You can add additional logic here if needed
  };

  return (
    <form className='max-w-screen-md mx-auto -translate-y-100' onSubmit={handleSubmit}>
      <div className='relative ml-20 mb-4 sm:mb-20 object-top'>
        <input
          type='search'
          placeholder='Type Here'
          className='w-full p-2 sm:p-4 rounded-full bg-slate-800'
          value={input}
          onChange={handleChange}
        />
        <button type="submit" className='absolute right-1 top-1/2 -translate-y-1/2 p-2 sm:p-4 bg-slate-900 rounded-full'>
          <AiOutlineSearch />
        </button>
      </div>
      {error && <div className="text-red-500">{error}</div>}
      {activeSearch.length > 0 && (
        <div className='absolute top-20 p-2 sm:p-4 bg-slate-800 text-white w-full rounded-xl left-1/2 -translate-x-1/2 flex flex-col gap-2'>
          {activeSearch.map((s, index) => (
            <span key={index}>{s}</span>
          ))}
        </div>
      )}
    </form>
  );
};

export default Searchbar;
