import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Services = () => {
    return (
        <div className=''>
            <div className='container mx-auto px-16 py-3'>
                <h1>Services</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae perferendis neque animi et nesciunt, itaque veniam culpa provident consectetur tempora quisquam quo, at nam, voluptatum illo ad optio. Dolor obcaecati non saepe assumenda fugiat rem cumque praesentium exercitationem ullam incidunt sapiente quae necessitatibus perferendis ducimus quidem excepturi ipsum, expedita fuga.</p>
                <div className='py-10'>
                
                    <nav className=''>
                        <ul className='flex items-center gap-5'>
                            <li>
                                <Link to="/services/productOne">productOne</Link>
                            </li>
                            <li>
                                <Link to="/services/productTwo">productTwo</Link>
                            </li>
                            <li>
                                <Link to="/services/productThree">productThree</Link>
                            </li>
                        </ul>
                    </nav>

                    <div className='py-16'>
                        <Outlet />
                    </div>
                </div>
                <h1 className='py-5'>Services</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae perferendis neque animi et nesciunt, itaque veniam culpa provident consectetur tempora quisquam quo, at nam, voluptatum illo ad optio. Dolor obcaecati non saepe assumenda fugiat rem cumque praesentium exercitationem ullam incidunt sapiente quae necessitatibus perferendis ducimus quidem excepturi ipsum, expedita fuga.</p>

            </div>
        </div>
    );
};

export default Services;