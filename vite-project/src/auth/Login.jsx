import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import videoSrc from '../assets/login.mp4'; 

const Login = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const user = users.find(user => user.email === email && user.password === password);

        if (user) {
            localStorage.setItem('loggedInUser', JSON.stringify(user));
            navigate('/'); 
            window.location.reload()
        } else {
            alert('Invalid email or password');
        }
    };

    const handleSignUpRedirect = () => {
        navigate('/register'); 
    };

    return (
        <div className='flex flex-col w-full h-[90vh] lg:flex-row'>
            <div className='lg:w-[50%]'>
                <video 
                    src={videoSrc} 
                    alt="Hero Video" 
                    className='object-cover w-full h-full' 
                    autoPlay 
                    loop 
                    muted
                />
            </div>
            <div className='w-full lg:w-[50%] flex items-center justify-center'>
                <div className='flex flex-col w-full max-w-md p-8 space-y-6'>
                    <h3 className='text-[30px] text-[#0E0E0E] font-bold'>Log into This website</h3>
                    <form className='space-y-4' onSubmit={handleLogin}>
                        <div className='flex flex-col'>
                            <label htmlFor='email' className='text-sm font-medium text-gray-700'>Email Address</label>
                            <input
                                type='email'
                                id='email'
                                className='block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                                placeholder='email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className='relative flex flex-col'>
                            <label htmlFor='password' className='text-sm font-medium text-gray-700'>Password</label>
                            <input
                                type={passwordVisible ? 'text' : 'password'}
                                id='password'
                                className='block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                                placeholder='Password'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            <span 
                                className='absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer'
                                onClick={() => setPasswordVisible(!passwordVisible)}
                            >
                                <svg className='w-5 h-5 text-gray-400' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                                    {passwordVisible ? (
                                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M13.875 18.825a10.05 10.05 0 01-1.875.175c-4.633 0-8.388-3.053-9.813-7.375 1.426-4.322 5.18-7.375 9.813-7.375 1.98 0 3.857.514 5.463 1.413M15 15l6 6m0-6l-6 6' />
                                    ) : (
                                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z' />
                                    )}
                                </svg>
                            </span>
                        </div>
                        <button
                            type='submit'
                            className='w-full px-4 py-2 text-sm font-medium text-white bg-gray-400 border border-transparent rounded-md hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500'
                        >
                            Log In
                        </button>
                        <p className='mt-4 text-sm text-gray-600'>
                            Don't have an account? 
                            <button 
                                onClick={handleSignUpRedirect}
                                className='ml-1 text-indigo-600 hover:text-indigo-700'
                            >
                                Sign Up
                            </button>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
