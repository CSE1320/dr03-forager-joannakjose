'use client';
import React, { useState, useRef, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa'; // Search icon
import { FiFilter } from 'react-icons/fi'; // Filter icon
import { FaTimes } from 'react-icons/fa'; // Clear icon
import Link from 'next/link';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const searchInputRef = useRef(null);

  // Handle search when pressing Enter
  const handleSearch = (event) => {
    if (event.key === 'Enter') {
      onSearch(query); // Call search function on Enter key press
    }
  };

  // Handle clearing the search input
  const handleClear = () => {
    setQuery(''); // Clear the search query
    onSearch(''); // Notify parent component to clear results
    if (searchInputRef.current) {
      searchInputRef.current.focus(); // Refocus on the input after clearing
    }
  };

  // Focus on the search input when the component mounts
  useEffect(() => {
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, []);

  return (
    <div className="flex items-center justify-between w-full max-w-xl mx-auto">
      <div className="relative flex items-center w-full bg-white border border-gray-300 rounded-full px-4 py-2 shadow-sm">
        {/* Search Icon */}
        <FaSearch className="text-gray-400 mr-3" size={20} />

        {/* Search Input */}
        <input
          type="text"
          placeholder="Search for a mushroom"
          className="flex-1 outline-none text-gray-700 placeholder-gray-400"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleSearch}
          ref={searchInputRef}
        />

        {/* Clear Button (only shows if there’s text in the search box) */}
        {query && (
          <button onClick={handleClear} className="focus:outline-none">
            <FaTimes className="text-gray-400 hover:text-gray-600" />
          </button>
        )}
      </div>

      {/* Filter Button */}
      <Link href="/filter" className="text-[#397367] ml-3 flex items-center">
        <FiFilter size={20} />
      </Link>
    </div>
  );
};

export default SearchBar;
