import React, { useState, useEffect, useCallback } from 'react';
import { fetchUserLocation } from './UserLocation'; // Adjust the path according to your file structure

const SearchBar = ({ onSearch, onEnter }) => {
  const [query, setQuery] = useState('');
  const [location, setLocation] = useState('Detecting location...');
  const [isLoading, setIsLoading] = useState(true);

  // Fetch user location when the component mounts
  useEffect(() => {
    const getLocation = async () => {
      try {
        const userLocation = await fetchUserLocation();
        if (userLocation && userLocation.city) {
          setLocation(userLocation.city);
        } else {
          setLocation('Location unavailable');
        }
      } catch (error) {
        setLocation('Location unavailable');
      } finally {
        setIsLoading(false);
      }
    };
    getLocation();
  }, []);

  const handleSearch = useCallback((e) => {
    const input = e.target.value;
    setQuery(input);
    onSearch(input); // Update search results in real-time
  }, [onSearch]);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault(); // Prevent default action
      onEnter(); // Call the onEnter callback to scroll
    }
  };

  return (
    <div className="absolute left-1/2 content-center -translate-x-1/2 w-full max-w-xl inset-0 z-0">
      <div className="flex bg-white rounded-lg shadow-lg">
        <input
          type="text"
          className="w-full px-4 py-3 rounded-l-lg shadow-lg cursor-text"
          value={query}
          onChange={handleSearch} // Handle search input change
          onKeyDown={handleKeyDown} // Handle Enter key press
          placeholder="Search for restaurant, cuisine or a dish"
        />
        <div className="px-4 py-3 bg-gray-100 text-gray-700 rounded-r-lg shadow-lg flex items-center">
        {isLoading ? '📍 Detecting location...' : `📍 ${location}`}        </div>
      </div>
    </div>
  );
};

export default SearchBar;
