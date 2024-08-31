import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  // Get the cart items from the Redux store
  const cartItems = useSelector((state) => state.cart.items);

  // Calculate the total quantity of items in the cart
  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <header
      className="bg-cover bg-center relative animate-fade-in"
      style={{
        backgroundImage: 'url("https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png")',
        height: '75vh' // 75% of the viewport height
      }}
    >
      {/* Top Navigation Bar */}
      <div className="absolute top-5 left-5 right-5 m-4 flex space-x-4 text-white justify-between md:justify-start md:space-x-4">
        <div className="flex space-x-4">
          <Link to="/" className="hover:underline text-xl">Home</Link>
          <Link to="/about" className="hover:underline text-xl">About</Link>
        </div>
        <div className="flex space-x-4">
          <Link to="/cart" className="hover:underline text-xl flex items-center">
            Cart 🛒
            {totalQuantity > 0 && (
              <span className="ml-2 bg-red-500 text-white px-2 py-1 rounded-full text-sm">
                {totalQuantity}
              </span>
            )}
          </Link>
          <Link to="/login" className="hover:underline text-xl">Log in</Link>
          <Link to="/signup" className="hover:underline text-xl">Sign up</Link>
        </div>
      </div>

      {/* Logo and Slogan */}
      <div className="absolute inset-0 flex flex-col items-center mt-20 text-center px-4">
        <h1 className="text-white text-5xl md:text-7xl font-bold">Tomato</h1>
        <h2 className="text-white text-lg md:text-2xl italic mt-2">Discover the best food & drinks</h2>
      </div>
    </header>
  );
};

export default Header;
