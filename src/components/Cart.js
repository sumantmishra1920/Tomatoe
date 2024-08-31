import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, updateItemQuantity, clearCart } from '../redux/slices/cartSlice';

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const [isEmpty, setIsEmpty] = React.useState(cartItems.length === 0);

  // Update the empty state when cartItems change
  React.useEffect(() => {
    setIsEmpty(cartItems.length === 0);
  }, [cartItems]);

  // Group items by id and accumulate quantities
  const groupedItems = cartItems.reduce((acc, item) => {
    const existingItem = acc.find(i => i.id === item.id);
    if (existingItem) {
      existingItem.quantity += item.quantity;
    } else {
      acc.push({ ...item });
    }
    return acc;
  }, []);

  // Calculate the total cost
  const totalPrice = groupedItems.reduce((total, item) => total + (item.cost * item.quantity), 0);

  const handleIncreaseQuantity = (id) => {
    const item = cartItems.find(item => item.id === id);
    if (item) {
      dispatch(updateItemQuantity({ id, quantity: item.quantity + 1 }));
    }
  };

  const handleDecreaseQuantity = (id) => {
    const item = cartItems.find(item => item.id === id);
    if (item && item.quantity > 1) {
      dispatch(updateItemQuantity({ id, quantity: item.quantity - 1 }));
    } else {
      dispatch(removeFromCart(id));
    }
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="container mx-auto p-6 animate-fade-in bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-extrabold mb-6 text-center text-gray-800">Your Cart</h1>
      {isEmpty ? (
        <p className="text-center text-gray-500">Oopss, Your cart is empty!</p>
      ) : (
        <div className="max-w-2xl mx-auto">
          <ul className="mb-6">
            {groupedItems.map((item) => (
              <li key={item.id} className="flex justify-between items-center mb-4 bg-white shadow-lg rounded-lg p-4">
                <span className="font-semibold text-gray-700">
                  {item.name} - ₹{(item.cost * item.quantity).toFixed(2)}
                </span>
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => handleDecreaseQuantity(item.id)}
                    className="bg-red-400 text-white px-3 py-1 rounded-full transition-transform transform hover:scale-105 active:scale-95"
                  >
                    -
                  </button>
                  <span className="text-lg font-bold text-gray-700">{item.quantity}</span>
                  <button
                    onClick={() => handleIncreaseQuantity(item.id)}
                    className="bg-green-400 text-white px-3 py-1 rounded-full transition-transform transform hover:scale-105 active:scale-95"
                  >
                    +
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className="text-right font-bold text-xl text-gray-700 mb-6">Total: ₹{totalPrice.toFixed(2)}</div>
          <div className="flex justify-between">
            <button
              onClick={handleClearCart}
              className="bg-red-500 text-white font-semibold px-4 py-2 rounded-lg transition-transform transform hover:scale-105 active:scale-95"
            >
              Clear Cart
            </button>
            <button
              onClick={() => alert('Order Placed!')}
              className="bg-blue-500 text-white font-semibold text-xl px-6 py-3 rounded-lg transition-transform transform hover:scale-105 active:scale-95"
            >
              Place Order
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
