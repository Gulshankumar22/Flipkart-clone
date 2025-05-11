import React from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

const Product = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));
  const { dispatch } = useCart();

  return (
    <div className="p-4">
      <div className="flex flex-col md:flex-row gap-6">
        <img src={product.image} alt={product.name} className="w-full md:w-1/3" />
        <div>
          <h2 className="text-2xl font-bold">{product.name}</h2>
          <p className="text-lg text-green-600">${product.price}</p>
          <p className="text-sm text-gray-500">Rating: {product.rating}⭐</p>
          <p className="my-2">{product.description}</p>
          <div className="flex gap-4 mt-4">
            <button className="bg-blue-600 text-white px-4 py-2 rounded" onClick={() => dispatch({ type: 'ADD_TO_CART', payload: product })}>Add to Cart</button>
            <button className="bg-green-600 text-white px-4 py-2 rounded">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;