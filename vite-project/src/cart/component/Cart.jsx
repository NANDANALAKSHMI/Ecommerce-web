import React, { useState, useEffect } from 'react';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [userId, setUserId] = useState(null);

  useEffect(() => {

    const storedUser = JSON.parse(localStorage.getItem('loggedInUser'));
    setUserId(storedUser?.id);
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    const userCartItems = storedCart.filter(item => item.userId === storedUser?.id);
    setCartItems(userCartItems);
  }, []);

  const removeItem = (itemId) => {
    const updatedCart = cartItems.filter(item => item.id !== itemId);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    setCartItems(updatedCart);
  };

  return (
    <div className="container py-10 mx-auto">
      {cartItems.length === 0 ? (
        <p className="text-center text-gray-600">Your cart is empty</p>
      ) : (
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div key={item.id} className="flex p-4 border border-gray-200 rounded-lg shadow-sm">
              <img
                src={item.image}
                alt={item.title}
                className="object-contain w-24 h-24 mr-4 rounded-md"
              />
              <div className="flex-grow">
                <h2 className="text-lg font-semibold">{item.title}</h2>
                <p className="mt-1 text-lg font-bold">Rs. {item.price}</p>
                <p className="mt-1 text-sm text-gray-500">Quantity: {item.quantity}</p>
                <div className="flex items-center mt-2">
                  <button className="px-4 py-1 text-sm text-white bg-blue-500 rounded hover:bg-blue-600">
                    Buy
                  </button>
                  <button
                    className="ml-4 text-sm text-red-500 hover:underline"
                    onClick={() => removeItem(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
