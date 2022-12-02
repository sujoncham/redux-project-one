import React, { useEffect, useState } from 'react';
import Products from './Products/Products';

const Home = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch('product.json').then(res=>res.json()).then(data => setProducts(data));
    }, []);
    console.log(products);
    return (
        <div>
            <h1>Home</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                {
                    products.map(product => <Products key={product.id} product={product} />)
                }
            </div>
        </div>
    );
};

export default Home;