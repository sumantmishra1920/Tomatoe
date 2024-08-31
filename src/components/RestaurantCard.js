import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/slices/cartSlice'; // Import the action

const RestaurantCard = ({ restaurant }) => {
  const dispatch = useDispatch();
  const [showNotification, setShowNotification] = useState(false);

  const handleAddToCart = () => {
    dispatch(addToCart(restaurant));
    setShowNotification(true);

    // Hide the notification after 1 second
    setTimeout(() => {
      setShowNotification(false);
    }, 1000);
  };

  return (
    <div className="border rounded-lg p-4 hover:shadow-xl relative transition-transform transform hover:scale-105 bg-white animate-fade-in">
      <img
        src={restaurant.photo}
        alt={`₹{restaurant.dish}`}
        className="w-full h-40 object-cover rounded-lg mb-4"
      />
      <div className="relative">
        <div className="absolute top-2 right-2 flex flex-col items-end space-y-1">
          <p className="bg-green-500 text-white text-sm py-1 px-3 rounded-full shadow-md">
            {restaurant.rating}★
          </p>
          <p className="font-bold text-gray-700 text-sm">₹{restaurant.cost}</p>
        </div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">{restaurant.dish}</h2>
        <p className="text-lg font-semibold text-gray-600 mb-2">{restaurant.name}</p>
        <p className="text-sm text-gray-500 mb-4">Delivery in {restaurant.deliveryTime} minutes</p>
        <button
          onClick={handleAddToCart}
          className="bg-rose-500 text-white py-2 px-6 rounded-lg cursor-pointer hover:bg-rose-600 transition-all transform hover:scale-105 active:scale-95"
        >
          Add to Cart
        </button>
      </div>
      {/* Notification */}
      {showNotification && (
        <div
          className={`absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-teal-500 text-white py-2 px-4 rounded-lg shadow-lg animate-fade-out`}
        >
          Added Successfully!
        </div>
      )}
    </div>
  );
};

export default RestaurantCard;
