import React from 'react';
import { FiSearch, FiHeart, FiShoppingCart, FiUser } from 'react-icons/fi';
import img from "../assets/logo_web.png";
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem('currentUser')) || {};

    const handleProfileClick = () => {
        navigate('/profile'); // Navigate to the profile page
    };
    const handleHomeClick = () => {
        navigate('/'); 
    };

    return (
        <div className='container mx-auto'>
            <header className="flex items-center justify-between px-4 py-2 bg-white shadow-sm">
                <div className="flex items-center w-32 h-20">
                    <img src={img} alt="Logo" onClick={handleHomeClick}/>
                </div>

                {/* Navigation (optional) */}
                {/* <nav>
                <ul className="flex space-x-4">
                    <li>Men</li>
                    <li>Women</li>
                    <li>Kids</li>
                    <li>Shop</li>
                    <li>Contact us</li>
                </ul>
            </nav> */}

                {/* Search bar (optional) */}
                {/* <div className="items-center hidden px-3 py-1 border rounded-full md:flex ">
                    <input type="text" placeholder="Search here" className="outline-none" />
                    <FiSearch className="ml-2 text-gray-400" />
                </div> */}

                <div className="flex items-center space-x-4">
                    <FiHeart className="w-6 h-6" />
                    <FiShoppingCart className="w-6 h-6" />
                    <div className="flex items-center cursor-pointer" onClick={handleProfileClick}>
                        <FiUser className="w-6 h-6" />
                        {user.name && (
                            <span className="ml-2 text-sm font-medium">{user.name}</span>
                        )}
                    </div>
                </div>
            </header>
        </div>
    );
}

export default Header;
