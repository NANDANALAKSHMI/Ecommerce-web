import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import img from "../../assets/product.png";
import { useNavigate } from 'react-router-dom';

const ProductDetailPage = ({ programDetail }) => {
  const [selectedImage, setSelectedImage] = useState(img);
  const navigate = useNavigate();
  const images = [
    programDetail.image,
    programDetail.image,
    programDetail.image,
    programDetail.image,
  ];

  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (event) => {
    setQuantity(Number(event.target.value));
  };
  const addToCart = () => {
    const user = JSON.parse(localStorage.getItem('loggedInUser'));

    if (!user) {
      alert('Please log in to add items to your cart.');
      navigate('/login');
      return;
    }

    if (!user.id) {
      const userId = prompt('Please enter your user id to store in localStorage:');
      if (userId) {
        user.id = userId;
        localStorage.setItem('loggedInUser', JSON.stringify(user));
      }
    }

    const cartItem = {
      id: programDetail.id,
      title: programDetail.title,
      image: programDetail.image,
      price: programDetail.price,
      quantity: quantity,
      userId: user.id 
    };

    const existingCart = JSON.parse(localStorage.getItem('cart')) || [];

    const existingItemIndex = existingCart.findIndex(item => item.id === cartItem.id && item.userId === cartItem.userId);

    if (existingItemIndex > -1) {
      existingCart[existingItemIndex].quantity += quantity;
    } else {
      existingCart.push(cartItem);
    }

    localStorage.setItem('cart', JSON.stringify(existingCart));

    alert('Product added to cart');
  };
  return (
    <div className="container flex flex-col w-full py-10 mx-auto lg:flex-row">
      <div className="flex gap-5 lg:w-[50%] lg:flex-row flex-col">
        <div className='flex w-full mb-4 lg:w-1/4 lg:flex-col lg:mb-0'>
          {images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`Thumbnail ${idx}`}
              className={`w-1/4 lg:w-full mb-4 cursor-pointer ${selectedImage === img ? '' : ''}`}
              onClick={() => setSelectedImage(img)}
            />
          ))}
        </div>

        <div className='w-full h-full'>
          <img src={programDetail?.image} alt="Main" className="w-full h-auto mb-4" />
        </div>
      </div>
      <div className="flex flex-col items-start lg:pl-8 lg:w-[50%] w-full">
        <h2 className="text-2xl font-bold">{programDetail?.title}</h2>
        <p className="text-gray-600">{programDetail?.description}</p>

        <div className="flex items-center mb-4">
          {[...Array(5)].map((star, index) => (
            <FaStar key={index} className={`text-yellow-500 ${index < Math.round(programDetail?.rating?.rate) ? 'fill-current' : ''}`} />
          ))}
          <p className="ml-2 text-gray-600">{programDetail?.rating?.rate}</p>
        </div>
        <p className="text-xl font-bold text-green-600">Rs. {programDetail?.price}</p>
        <div className="flex items-center mt-4">
          <label htmlFor="quantity" className="mr-2">Quantity:</label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            value={quantity}
            onChange={handleQuantityChange}
            min="1"
            className="w-16 px-2 py-1 border border-gray-300 rounded"
          />
        </div>

        <button
          onClick={addToCart}
          className="px-6 py-2 mt-4 text-white bg-blue-600 rounded"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetailPage;
