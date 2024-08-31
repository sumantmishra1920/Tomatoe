import React from 'react';
import SearchBar from '../components/SearchBar';
import RestaurantList from '../components/RestaurantList';

const Home = () => (
  <div className="container mx-auto p-4">
    <SearchBar />
    <RestaurantList />
  </div>
);

export default Home;
