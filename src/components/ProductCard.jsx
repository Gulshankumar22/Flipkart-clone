import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { dispatch } = useCart();

  return (
    <div className="border p-4 rounded shadow w-60 flex flex-col justify-between h-80">
      <Link to={`/product/${product.id}`} className="flex-1">
        <img src={product.image} alt={product.name} className="h-32 w-full object-contain" />
        <h3 className="font-bold text-lg mt-2">{product.name}</h3>
        <p>₹{product.price}</p>
      </Link>

      <button
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
        onClick={() => dispatch({ type: 'ADD_TO_CART', payload: product })}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
