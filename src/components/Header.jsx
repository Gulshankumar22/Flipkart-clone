import React, { useState } from 'react';
import ProductCard from './ProductCard'; // Make sure path is correct

const Header = () => {
  const [showFashionMenu, setShowFashionMenu] = useState(false);
  const [showMobilesMenu, setShowMobilesMenu] = useState(false);
  const [activeMobileCategory, setActiveMobileCategory] = useState("Smartphones");
  const [activeFashionCategory, setActiveFashionCategory] = useState("Men's Top Wear");
  const [showProducts, setShowProducts] = useState(false); // 🔴 New state

  const fashionSubcategories = {
    "Men's Top Wear": [
      "All", "Men's T-Shirts", "Men's Casual Shirts", "Men's Formal Shirts",
      "Men's Kurtas", "Men's Ethnic Sets", "Men's Blazers", "Men's Raincoat",
      "Men's Windcheaters", "Men's Suit", "Men's Fabrics"
    ],
    "Men's Bottom Wear": [],
    "Women Ethnic": [],
    "Men Footwear": [],
    "Women Footwear": [],
    "Watches and Accessories": [],
    "Women Western": [],
    "Bags, Suitcases & Luggage": [],
    "Kids": [],
    "Essentials": [],
    "Winter": []
  };

  const mobileSubcategories = {
    "Smartphones": ["Android Phones", "iPhones", "Gaming Phones"],
    "Accessories": ["Chargers", "Power Banks", "Covers & Cases"],
    "Wearables": ["Smartwatches", "Fitness Bands", "VR Headsets"]
  };

  const iconCategories = [
    { name: "Kilos", img: "/images/kilos.webp" },
    { name: "Mobiles", img: "/images/phone.webp" },
    { name: "Fashion", img: "/images/appliance.webp" },
    { name: "Electronics", img: "/images/laptop.jpg" },
    { name: "Home & Furniture", img: "/images/flight.webp" },
    { name: "Appliances", img: "/images/frize.jpg" },
    { name: "Flight Bookings", img: "/images/furniture.webp" },
    { name: "Beauty, Toys & More", img: "/images/toys.avif" },
    { name: "Two Wheelers", img: "/images/bike.avif" },
  ];

  const handleCategoryClick = (name) => {
    if (name === "Fashion") {
      setShowFashionMenu(!showFashionMenu);
      setShowMobilesMenu(false);
      setShowProducts(false);
    } else if (name === "Mobiles") {
      setShowMobilesMenu(!showMobilesMenu);
      setShowFashionMenu(false);
      setShowProducts(false);
    } else {
      setShowFashionMenu(false);
      setShowMobilesMenu(false);
      setShowProducts(false);
    }
  };

  return (
    <div className="p-4">
      {/* Icon Category Section */}
      <div className="flex space-x-6 justify-center mb-4">
        {iconCategories.map((cat, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center cursor-pointer"
            onClick={() => handleCategoryClick(cat.name)}
          >
            <img src={cat.img} alt={cat.name} className="h-16 w-30 object-contain" />
            <span className="text-sm font-semibold mt-2">{cat.name}</span>
          </div>
        ))}
      </div>

      {/* Fashion Dropdown */}
      {showFashionMenu && (
        <div className="flex border rounded shadow overflow-hidden max-w-4xl mx-auto">
          <div className="w-1/2 bg-gray-100 border-r">
            {Object.keys(fashionSubcategories).map((category, idx) => (
              <div
                key={idx}
                className={`px-4 py-2 cursor-pointer hover:bg-blue-100 ${
                  activeFashionCategory === category ? 'bg-blue-100 font-semibold' : ''
                }`}
                onMouseEnter={() => setActiveFashionCategory(category)}
              >
                {category}
              </div>
            ))}
          </div>
          <div className="w-1/2 p-4">
            <h4 className="font-semibold text-gray-800 mb-2">
              More in {activeFashionCategory}
            </h4>
            <ul className="list-disc pl-4 text-gray-700">
              {fashionSubcategories[activeFashionCategory].length > 0 ? (
                fashionSubcategories[activeFashionCategory].map((item, idx) => (
                  <li
                    key={idx}
                    className="py-1 cursor-pointer hover:underline"
                    onClick={() => setShowProducts(true)}
                  >
                    {item}
                  </li>
                ))
              ) : (
                <li className="text-gray-500">No subcategories</li>
              )}
            </ul>
          </div>
        </div>
      )}

      {/* Mobiles Dropdown */}
      {showMobilesMenu && (
        <div className="flex border rounded shadow overflow-hidden max-w-4xl mx-auto mt-4">
          <div className="w-1/2 bg-gray-100 border-r">
            {Object.keys(mobileSubcategories).map((category, idx) => (
              <div
                key={idx}
                className={`px-4 py-2 cursor-pointer hover:bg-green-100 ${
                  activeMobileCategory === category ? 'bg-green-100 font-semibold' : ''
                }`}
                onMouseEnter={() => setActiveMobileCategory(category)}
              >
                {category}
              </div>
            ))}
          </div>
          <div className="w-1/2 p-4">
            <h4 className="font-semibold text-gray-800 mb-2">
              More in {activeMobileCategory}
            </h4>
            <ul className="list-disc pl-4 text-gray-700">
              {mobileSubcategories[activeMobileCategory].map((item, idx) => (
                <li
                  key={idx}
                  className="py-1 cursor-pointer hover:underline"
                  onClick={() => setShowProducts(true)}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Product Cards Section */}
      {showProducts && (
        <div className="mt-6 flex justify-center gap-4 flex-wrap">
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      )}
    </div>
  );
};

export default Header;
