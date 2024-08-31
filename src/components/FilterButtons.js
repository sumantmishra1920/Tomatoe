import React from 'react';

const FilterButtons = ({ restaurants, setFilteredRestaurants }) => {
  const handleTopRated = () => {
    const filteredList = restaurants.filter((restaurant) => restaurant.rating > 4.5);
    setFilteredRestaurants(filteredList);
  };

  const handleSortByCost = () => {
    setFilteredRestaurants((prevFiltered) =>
      [...prevFiltered].sort((A, B) => A.cost - B.cost)
    );
  };

  const handleSortByDeliveryTime = () => {
    setFilteredRestaurants((prevFiltered) =>
      [...prevFiltered].sort((A, B) => A.deliveryTime - B.deliveryTime)
    );
  };

  const handleSortByRating = () => {
    setFilteredRestaurants((prevFiltered) =>
      [...prevFiltered].sort((A, B) => B.rating - A.rating)
    );
  };

  const handleClearFilters = () => {
    setFilteredRestaurants(restaurants);
  };

  return (
    <div className="relative z-10 flex flex-wrap justify-center space-x-2 mb-4">
      <button
        className="mb-2 bg-purple-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-purple-700 hover:shadow-lg transition-transform transform hover:scale-105 active:scale-95"
        onClick={handleTopRated}
      >
        Top Rated Restaurants
      </button>

      <button
        className="mb-2 bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg transition-transform transform hover:scale-105 active:scale-95"
        onClick={handleSortByCost}
      >
        Sort by ₹₹₹
      </button>

      <button
        className="mb-2 bg-green-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-green-700 hover:shadow-lg transition-transform transform hover:scale-105 active:scale-95"
        onClick={handleSortByDeliveryTime}
      >
        Sort by Delivery Time
      </button>

      <button
        className="mb-2 bg-yellow-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-yellow-700 hover:shadow-lg transition-transform transform hover:scale-105 active:scale-95"
        onClick={handleSortByRating}
      >
        Sort by ★
      </button>

      <button
        className="mb-2 bg-red-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-red-700 hover:shadow-lg transition-transform transform hover:scale-105 active:scale-95"
        onClick={handleClearFilters}
      >
        Clear Filters
      </button>
    </div>
  );
};

export default FilterButtons;
