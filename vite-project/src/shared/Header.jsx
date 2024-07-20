import React from 'react';
import { FiSearch, FiHeart, FiShoppingCart, FiUser } from 'react-icons/fi';
import img from "../assets/logo_web.png";
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem('loggedInUser')) || {};

    const handleProfileClick = () => {
        navigate('/profile'); 
    };
    const handleHomeClick = () => {
        navigate('/'); 
    };
    const handlecartClick = () => {
        navigate('/cart'); 
    };

    return (
        <div className='container mx-auto'>
            <header className="flex items-center justify-between px-4 py-2 bg-white shadow-sm">
                <div className="flex items-center w-32 h-20">
                    <img src={img} alt="Logo" onClick={handleHomeClick}/>
                </div>
                <div className="flex items-center space-x-4 " >
                    <FiShoppingCart className="w-7 h-7" onClick={handlecartClick} />
                    <div className="flex items-center cursor-pointer" onClick={handleProfileClick}>
                        <FiUser className="h-7 w-7" />
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
