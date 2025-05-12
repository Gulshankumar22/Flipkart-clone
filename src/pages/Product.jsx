import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { products } from "../data/products";
import { useCart } from "../context/CartContext";

const Product = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  const { dispatch } = useCart();
  const navigate = useNavigate();

  const [mainImage, setMainImage] = useState(product?.image || "");

  if (!product) return <div>Product not found</div>;

  const handleBuyNow = () => {
    navigate("/checkout");
  };

  return (
    <div className="h-screen flex overflow-hidden">
      {/* Left Side */}
      <div className="w-5/12 flex p-4 gap-4 overflow-hidden">
        {/* Thumbnails */}
        <div className="sticky top-0 h-full overflow-y-auto flex flex-col gap-2 w-1/6">
          {(product.images || []).map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`Thumb ${i}`}
              onClick={() => setMainImage(img)}
              className={`w-full h-20 object-cover rounded-md cursor-pointer border-2 ${
                mainImage === img ? "border-blue-500" : "border-transparent"
              }`}
            />
          ))}
        </div>

        {/* Main Image + Actions */}
        <div className="sticky top-0 h-full w-5/6 flex flex-col items-center gap-4">
          <img
            src={mainImage}
            alt={product.name}
            className="w-full max-h-[400px] object-contain"
          />
          <div className="flex gap-4 w-full px-4">
            <button
              className="bg-orange-500 text-white font-semibold px-6 py-2 rounded w-1/2"
              onClick={() => dispatch({ type: "ADD_TO_CART", payload: product })}
            >
              🛒 Add to Cart
            </button>
            <button
              className="bg-orange-600 text-white font-semibold px-6 py-2 rounded w-1/2"
              onClick={handleBuyNow}
            >
              ⚡ Buy Now
            </button>
          </div>
        </div>
      </div>

      {/* Right Side Info */}
      <div className="w-7/12 h-full overflow-y-auto p-6 space-y-4">
        <h2 className="text-2xl font-semibold">{product.name}</h2>
        <div className="flex items-center gap-2 text-green-700">
          <span className="text-xl font-bold">₹{product.price}</span>
          <span className="line-through text-gray-500">₹{product.originalPrice}</span>
          <span className="text-sm text-green-600">{product.discount}</span>
        </div>
        <p className="text-sm text-gray-600">
          Rating: {product.rating}⭐ ({product.reviews || 300} reviews)
        </p>

        {/* Offers */}
        <div className="bg-gray-100 p-3 rounded-md">
          <p className="text-sm font-semibold">Available Offers</p>
          <ul className="text-sm list-disc ml-5 mt-2 text-gray-700 space-y-1">
            <li>Bank Offer: 5% Cashback on Flipkart Axis Bank Card</li>
            <li>Special Price: Extra ₹15000 off</li>
            <li>No Cost EMI from ₹5,667/month</li>
          </ul>
        </div>

        {/* Exchange */}
        <div className="border p-3 rounded">
          <p className="text-sm font-semibold mb-2">Exchange</p>
          <label className="flex items-center gap-2">
            <input type="radio" name="exchange" defaultChecked />
            Buy without Exchange - ₹{product.price}
          </label>
          <label className="flex items-center gap-2">
            <input type="radio" name="exchange" />
            Buy with Exchange - up to ₹49,600 off
          </label>
        </div>

        <p className="text-xs text-gray-500 mt-2">
          1 Year Manufacturer Warranty for Device and 6 Months for In-box Accessories.
        </p>

        {/* Variants */}
        <div className="p-4 rounded space-y-4 mt-4">
          {product.color && (
            <div>
              <p className="text-sm font-semibold mb-1">Color</p>
              <div className="flex gap-2">
                {product.color.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={`Color ${i}`}
                    onClick={() => setMainImage(img)}
                    className={`w-14 h-16 object-cover rounded-md cursor-pointer border-2 ${
                      mainImage === img ? "border-blue-500" : "border-transparent"
                    }`}
                  />
                ))}
              </div>
            </div>
          )}

          {(product.storage || product.size) && (
            <div>
              <p className="text-sm font-semibold mb-1">
                {product.storage ? "Storage" : "Size"}
              </p>
              <div className="flex gap-2">
                {(product.storage ? Object.values(product.storage) : Object.values(product.size)).map((s, i) => (
                  <button
                    key={i}
                    className="border px-4 py-1 rounded hover:border-blue-500 hover:font-semibold"
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Delivery */}
          <div>
            <p className="text-sm font-semibold">Delivery</p>
            <input
              type="number"
              className="text-black block py-2.5 ps-6 w-1/6 text-sm bg-transparent border-0 border-b-2 border-gray-300 focus:border-blue-600 focus:outline-none"
            />
            <span className="text-blue-600 cursor-pointer">Change</span>
            <p className="text-sm text-green-700">
              Faster delivery by <b>11 PM Tomorrow</b>&nbsp;
              <span className="line-through text-gray-400">₹70</span>{" "}
              <span className="text-green-700">Free</span>
            </p>
            <p className="text-blue-600 text-sm cursor-pointer">View Details</p>
          </div>
        </div>

        {/* Description and Payment Options */}
        <div className="border p-4 rounded space-y-4 mt-4 flex flex-col md:flex-row md:justify-between">
          <div>
            <p className="text-sm font-semibold">Description</p>
            <ul className="list-disc text-sm ml-5 mt-2 text-gray-700 space-y-1">
              {Object.values(product.specifications || {}).map((value, i) => (
                <li key={i}>{value}</li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold">Easy Payment Options</p>
            <ul className="list-disc text-sm ml-5 mt-2 text-gray-700 space-y-1">
              <li>No cost EMI starting from ₹5,667/month</li>
              <li>Cash on Delivery</li>
              <li>Net banking & Credit/Debit/ATM card</li>
            </ul>
            <p className="text-blue-600 text-sm mt-1 cursor-pointer">View Details</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
