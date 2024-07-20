import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import videoSrc from '../assets/login.mp4';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false);
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        const users = JSON.parse(localStorage.getItem('users')) || [];
        const userExists = users.some(user => user.email === email);

        if (userExists) {
            alert('User already exists');
        } else {
            const newUser = { id: uuidv4(), name, email, password };
            users.push(newUser);
            localStorage.setItem('users', JSON.stringify(users));
            navigate('/login');
        }
    };

    return (
        <div className='flex flex-col w-full h-[90vh] lg:flex-row'>
            <div className='lg:w-[50%] lg:block hidden'>
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
                    <h3 className='text-[30px] text-[#0E0E0E] font-bold'>Register for This Website</h3>
                    <form className='space-y-4' onSubmit={handleRegister}>
                        <div className='flex flex-col'>
                            <label htmlFor='name' className='text-sm font-medium text-gray-700'>Name</label>
                            <input
                                type='text'
                                id='name'
                                className='block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                                placeholder='Name'
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor='email' className='text-sm font-medium text-gray-700'>Email Address</label>
                            <input
                                type='email'
                                id='email'
                                className='block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                                placeholder='Email'
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
                                <svg className='w-5 h-5 mt-6 text-gray-400' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                                    {passwordVisible ? (
                                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M13.875 18.825a10.05 10.05 0 01-1.875.175c-4.633 0-8.388-3.053-9.813-7.375 1.426-4.322 5.18-7.375 9.813-7.375 1.98 0 3.857.514 5.463 1.413M15 15l6 6m0-6l-6 6' />
                                    ) : (
                                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z' />
                                    )}
                                </svg>
                            </span>
                        </div>
                        <div className='relative flex flex-col'>
                            <label htmlFor='confirmPassword' className='text-sm font-medium text-gray-700'>Confirm Password</label>
                            <input
                                type={passwordVisible ? 'text' : 'password'}
                                id='confirmPassword'
                                className='block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                                placeholder='Confirm Password'
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                            />
                        </div>
                        <button
                            type='submit'
                            className='w-full px-4 py-2 text-sm font-medium text-white bg-gray-400 border border-transparent rounded-md hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500'
                        >
                            Register
                        </button>
                    </form>
                    <p className='mt-4 text-sm text-gray-600'>
                        Already have an account?
                        <button
                            onClick={() => navigate('/login')}
                            className='ml-1 text-indigo-600 hover:text-indigo-700'
                        >
                            Login
                        </button>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;
