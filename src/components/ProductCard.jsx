import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { dispatch } = useCart();

  return (
    <div className="border p-4 rounded shadow">
      <Link to={`/product/${product.id}`}>
        <img src={product.image} alt={product.name} className="w-full h-40 object-cover" />
        <h3 className="font-bold text-lg mt-2">{product.name}</h3>
        <p>${product.price}</p>
      </Link>
      <button
        className="mt-2 bg-blue-500 text-white px-4 py-1 rounded"
        onClick={() => dispatch({ type: 'ADD_TO_CART', payload: product })}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
