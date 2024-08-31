import { useState, useCallback } from 'react';

const useSearch = (initialRestaurants) => {
  const [filteredRestaurants, setFilteredRestaurants] = useState(initialRestaurants);

  const handleSearch = useCallback((query) => {
    const filtered = initialRestaurants.filter((restaurant) =>
      restaurant.dish.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredRestaurants(filtered);
  }, [initialRestaurants]);

  return { filteredRestaurants, handleSearch, setFilteredRestaurants };
};

export default useSearch;
