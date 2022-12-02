import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='bg-purple-500'>
            <div className='container mx-auto px-16 py-3'>
                <nav className='flex justify-between items-center'>
                    <span className='text-3xl'>Logo</span>
                    <ul className='flex items-center gap-5'>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/services">Services</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                    </ul>
                </nav>

            </div>
        </div>
    );
};

export default Header;