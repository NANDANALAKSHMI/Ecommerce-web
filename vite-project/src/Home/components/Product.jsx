import React from 'react';
import image from "../../assets/product.png"
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Product = () => {
    const { product } = useSelector((state) => state.ProductState);

    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/products');
    };
    const limitedProducts = product.slice(0, 4);

    return (
        <div className='container py-20 mx-auto'>
            <div className='flex justify-between px-6 py-8 md:px-0'>
                <h3 className='text-[30px] font-bold'>Our Product</h3>
                <button className="px-6 py-2 text-gray-800 transition-colors border border-gray-800 rounded-[7px]  " onClick={handleClick}>
                    See All
                </button>
            </div>
            <div className='grid justify-center gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                {limitedProducts.map((product, index) => (
                    <div key={index} className="max-w-sm overflow-hidden rounded shadow-lg">
                        <div className='p-4'>
                            <img className="object-contain w-full h-64" src={product.image} alt={product.name} onClick={() => navigate(`/product/${product.id}`)}/>
                        </div>
                        <div className="px-4 py-3">
                            <h2 className="mb-1 text-lg font-semibold">{product.title}</h2>
                            <p className="mb-2 text-sm text-gray-600">Brand Name</p>
                            <div className="flex items-center mb-2">
                                <span className="mr-1 text-yellow-500">{product.rating.rate}</span>
                                <svg className="w-4 h-4 text-yellow-500 fill-current" viewBox="0 0 20 20">
                                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                                </svg>
                            </div>
                            <div className="flex items-center">
                                <span className="mr-2 text-lg font-bold">Rs. {product.price}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Product;
