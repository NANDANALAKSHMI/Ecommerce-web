import React from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = ({user}) => {
    const navigate = useNavigate();
 
    const handleLogout = () => {
        localStorage.removeItem('loggedInUser');
        navigate('/login'); 
        window.location.reload()
    };

    const handleLoginRedirect = () => {
        navigate('/login');
    };

    return (
        <div className='container mx-auto'>
            <header className='py-4 border-b'>
                <h1 className='text-2xl font-bold'>Profile</h1>
            </header>
            <div className='mt-6'>
                {user?.name ? (
                    <div>
                        <p><strong>Name:</strong> {user?.name}</p>
                        <p><strong>Email:</strong> {user?.email}</p>
                        {/* Add more user details here if needed */}
                        <button
                            onClick={handleLogout}
                            className='px-4 py-2 mt-4 text-white bg-red-500 rounded-md hover:bg-red-600'
                        >
                            Logout
                        </button>
                    </div>
                ) : (
                    <div>
                        <p>No user information available. Please log in.</p>
                        <button
                            onClick={handleLoginRedirect}
                            className='px-4 py-2 mt-4 text-white bg-blue-500 rounded-md hover:bg-blue-600'
                        >
                            Go to Login
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Profile;
