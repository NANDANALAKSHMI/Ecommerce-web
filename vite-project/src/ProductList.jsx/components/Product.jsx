import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { FiSearch } from 'react-icons/fi';
import { getProducts } from '../../Actions/ProductAction';

const Product = () => {
    const [sortOption, setSortOption] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const [category, setCategory] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage] = useState(8);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        navigate(path);
    };

    const { product, categories } = useSelector((state) => state.ProductState);

    useEffect(() => {
        dispatch(getProducts(sortOption, category, currentPage, productsPerPage));
    }, [sortOption, category, currentPage, productsPerPage, dispatch]);

    const handleSortChange = (event) => {
        setSortOption(event.target.value);
    };

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
    };

    const filteredProducts = product
        .filter((p) => p.title.toLowerCase().includes(searchTerm.toLowerCase()))
        .filter((p) => (category ? p.category === category : true))
        .sort((a, b) => {
            if (sortOption === 'desc') {
                return new Date(b.date) - new Date(a.date);
            }
            return 0;
        });

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className='container mx-auto'>
            <div className='flex flex-col items-center justify-between gap-4 px-6 py-8 md:flex-row md:px-0'>
                <h3 className='text-3xl font-bold'>Our Product</h3>

                <div className="flex items-center px-4 py-2 bg-white border rounded-full">
                    <input
                        type="text"
                        placeholder="Search here"
                        className="w-full outline-none"
                        value={searchTerm}
                        onChange={handleSearchChange}
                    />
                    <FiSearch className="ml-2 text-gray-400" />
                </div>

                <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                        <span className="font-medium text-gray-700">Filters</span>
                        <select
                            className="p-2 bg-white border rounded"
                            value={category}
                            onChange={handleCategoryChange}
                        >
                            <option value="">electronics</option>
                           
                        </select>
                    </div>

                    <div className="flex items-center space-x-2">
                        <span className="font-medium text-gray-700">Sort By</span>
                        <select
                            className="p-2 bg-white border rounded"
                            value={sortOption}
                            onChange={handleSortChange}
                        >
                            <option value="desc">Newest Arrivals</option>
                         
                        </select>
                    </div>
                </div>
            </div>
            <div className='grid justify-center gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                {currentProducts.map((product, index) => (
                    <div key={index} className="max-w-sm overflow-hidden rounded shadow-lg">
                        <div className='p-4'>
                            <img className="object-contain w-full h-64" src={product.image} alt={product.title} onClick={() => navigate(`/product/${product.id}`)} />
                        </div>
                        <div className="px-4 py-3">
                            <h2 className="mb-1 text-lg font-semibold">{product.title}</h2>
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
            <div className='flex justify-center mt-4'>
                {[...Array(Math.ceil(filteredProducts.length / productsPerPage)).keys()].map((number) => (
                    <button
                        key={number}
                        onClick={() => paginate(number + 1)}
                        className={`px-4 py-2 mx-1 ${currentPage === number + 1 ? 'bg-gray-500 text-white' : 'bg-white text-gray-500'} border rounded-full`}
                    >
                        {number + 1}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Product;
