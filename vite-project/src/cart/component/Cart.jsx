import React, { useState, useEffect } from 'react';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Fetch cart items from local storage
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(storedCart);
  }, []);

  const removeItem = (itemId) => {
    // Filter out the item to remove
    const updatedCart = cartItems.filter(item => item.id !== itemId);
    
    // Update local storage
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    
    // Update component state
    setCartItems(updatedCart);
  };

  return (
    <div className="container py-10 mx-auto">
      {cartItems.length === 0 ? (
        <p className="text-center text-gray-600">Your cart is empty</p>
      ) : (
        cartItems.map((item) => (
          <div key={item.id} className="flex p-4 mb-4 border border-gray-200 rounded-lg shadow-sm">
            <img 
              src={item.image} 
              alt={item.title} 
              className="object-cover mr-4 rounded-md w-[15%]"
            />
            <div className="flex-grow">
              <h2 className="text-xl font-semibold">{item.title}</h2>
              <p className="mt-2 text-lg font-bold">Rs. {item.price}</p>
              <p className="mt-2 text-sm text-gray-500">Quantity: {item.quantity}</p>
              <div className="flex items-center mt-4">
                <button className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">
                 Buy
                </button>
                <button 
                  className="ml-4 text-red-500 hover:underline"
                  onClick={() => removeItem(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
