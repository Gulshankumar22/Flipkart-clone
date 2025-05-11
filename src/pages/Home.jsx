import React from 'react';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

const Home = () => {
  return (
    <>
    <div className="p-4">
      <div className="bg-yellow-200 text-center text-2xl p-6 font-bold rounded">Welcome to Flipkart Mini</div>
      <h2 className="text-xl mt-4 mb-2">Trending Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {products.slice(0, 3).map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
    </>
  );
};

export default Home;