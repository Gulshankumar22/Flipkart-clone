import React from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

const Category = () => {
  const { name } = useParams();
  const filtered = products.filter(p => p.category.toLowerCase() === name.toLowerCase());

  return (
    <div className="p-4">
      <h2 className="text-2xl mb-4">{name} Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {filtered.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Category;