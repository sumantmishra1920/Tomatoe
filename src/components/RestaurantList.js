import React, { useEffect, useState, useCallback, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRestaurants } from '../redux/slices/restaurantSlice';
import RestaurantCard from './RestaurantCard';
import SearchBar from './SearchBar';
import FilterButtons from './FilterButtons';
import Loading from './Loading';

const RestaurantList = () => {
  const dispatch = useDispatch();
  const restaurants = useSelector((state) => state.restaurants.items);
  const status = useSelector((state) => state.restaurants.status);
  const error = useSelector((state) => state.restaurants.error);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const restaurantListRef = useRef(null); // Create a ref for the restaurant list container

  // Fetch restaurants when the component mounts
  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchRestaurants());
    }
  }, [status, dispatch]);

  // Update filteredRestaurants when restaurants are fetched
  useEffect(() => {
    setFilteredRestaurants(restaurants);
  }, [restaurants]);

  // Function to handle search input and filter restaurants in real-time
  const handleSearch = useCallback((query) => {
    setFilteredRestaurants(
      restaurants.filter((restaurant) =>
        restaurant.dish.toLowerCase().includes(query.toLowerCase()) ||
        restaurant.name.toLowerCase().includes(query.toLowerCase())
      )
    );
  }, [restaurants]);

  // Function to scroll to the restaurant list
  const scrollToRestaurantList = () => {
    if (restaurantListRef.current) {
      restaurantListRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  // Render the Loading component if status is 'loading' or 'failed'
  if (status === 'loading' || status === 'failed') {
    return <Loading status={status} error={error} />;
  }

  return (
    <div>
      <SearchBar onSearch={handleSearch} onEnter={scrollToRestaurantList} />
      <FilterButtons
        restaurants={restaurants}
        setFilteredRestaurants={setFilteredRestaurants}
      />
      <div
        ref={restaurantListRef} // Attach the ref to the container
        className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4"
      >
        {filteredRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} restaurant={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default RestaurantList;
