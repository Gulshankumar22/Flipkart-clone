import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="bg-blue-600 sticky text-white p-4 flex justify-between items-center sticky top-0 z-50">
      <Link to="/" className="text-xl font-bold">Flipkart Mini</Link>
      <div className="space-x-4">
        <Link to="/category/Mobiles">Mobiles</Link>
        <Link to="/category/Fashion">Fashion</Link>
        <Link to="/checkout"> 🛒Cart</Link>
      </div>
    </nav>
  );
};

export default Header;