import React from "react";
import { useParams } from "react-router-dom";
import { products } from "../data/products";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const Product = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  const { dispatch } = useCart();
  const navigate = useNavigate();

  if (!product) return <div>Product not found</div>;
  const handleclick = () => {
    navigate("/checkout");
  };

  return (
    <div className="h-screen flex overflow-hidden">
      {/* Left Side (Images + Buttons) */}
      <div className="w-5/12 flex p-4 gap-4 overflow-hidden">
        {/* Thumbnail Gallery */}
        <div className="sticky top-0 h-full overflow-y-auto flex flex-col gap-2 w-1/6">
          {product.images?.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Thumb ${index}`}
              className="w-full h-20 object-cover border rounded-md hover:border-blue-500 cursor-pointer"
            />
          ))}
        </div>

        {/* Main Image and Buttons */}
        <div className="sticky top-0 h-full w-5/6 flex flex-col items-center justify-top gap-4 mt-0">
          <img
            src={product.image}
            alt={product.name}
            className="w-full max-h-[400px] object-contain block transform transition duration-300 hover:scale-05"
          />

          <div className="flex gap-4 mt-4 w-full px-4">
            <button
              className="bg-orange-500 text-white font-semibold px-6 py-2 rounded w-1/2"
              onClick={() =>
                dispatch({ type: "ADD_TO_CART", payload: product })
              }
            >
              🛒 Add to Cart
            </button>
            <button
              className="bg-orange-600 text-white font-semibold px-6 py-2 rounded w-1/2"
              onClick={handleclick}
            >
              ⚡ Buy Now
            </button>
          </div>
        </div>
      </div>

      {/* Right Side Scrollable Product Info */}
      <div className="w-7/12 h-full overflow-y-auto p-6 space-y-4">
        <h2 className="text-2xl font-semibold">{product.name}</h2>
        <div className="flex items-center gap-2 text-green-700">
          <span className="text-xl font-bold">₹{product.price}</span>
          <span className="line-through text-gray-500">
            ₹{product.originalPrice || product.price + 15000}
          </span>
          <span className="text-sm text-green-600">
            {product.discount || "22% off"}
          </span>
        </div>
        <p className="text-sm text-gray-600">
          Rating: {product.rating}⭐ ({product.reviews || 300} reviews)
        </p>

        {/* Offers Section */}
        <div className="bg-gray-100 p-3 rounded-md">
          <p className="text-sm font-semibold">Available Offers</p>
          <ul className="text-sm list-disc ml-5 mt-2 text-gray-700 space-y-1">
            <li>Bank Offer: 5% Cashback on Flipkart Axis Bank Card</li>
            <li>Special Price: Extra ₹15000 off</li>
            <li>No Cost EMI from ₹5,667/month</li>
          </ul>
        </div>

        {/* Exchange Offers */}
        <div className="border p-3 rounded">
          <p className="text-sm font-semibold mb-2">Exchange</p>
          <label className="flex items-center gap-2">
            <input type="radio" name="exchange" defaultChecked /> Buy without
            Exchange - ₹{product.price}
          </label>
          <label className="flex items-center gap-2">
            <input type="radio" name="exchange" /> Buy with Exchange - up to
            ₹49,600 off
          </label>
        </div>

        <p className="text-xs text-gray-500 mt-2">
          1 Year Manufacturer Warranty for Device and 6 Months for In-box
          Accessories.
        </p>

        {/* Product Variants */}
        <div className=" p-4 rounded space-y-4 mt-4">
          <div>
            <p className="text-sm font-semibold mb-1">Color</p>
            <div className="flex gap-2">
              {product.images?.slice(0, 3).map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`Color ${i}`}
                  className="w-14 h-16 object-cover border rounded-md hover:border-blue-500 cursor-pointer"
                />
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold mb-1">
              {product.id === 1 ? "Storage" : "Size"}
            </p>
            <div className="flex gap-2">
              <button className="border px-4 py-1 rounded hover:border-blue-500 hover:font-semibold">
                {product.storage?.s1 || product.size?.s1}
              </button>
              <button className="border px-4 py-1 rounded hover:border-blue-500 hover:font-semibold">
                {product.storage?.s2 || product.size?.s2}
              </button>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold">Delivery</p>
            {/* <p className="text-sm text-gray-700">
              110062 <span className="text-blue-600 cursor-pointer">Change</span>
            </p> */}
            <input
              class=" text-black block py-2.5 ps-6 pe-0 w-1/6 text-sm  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              type="number"
            />
            <span className="text-blue-600 cursor-pointer">Change</span>
            <p className="text-sm text-green-700">
              Faster delivery by <b>11 PM Tomorrow</b> &nbsp;
              <span className="line-through text-gray-400">₹70</span>{" "}
              <span className="text-green-700">Free</span>
            </p>
            <p className="text-blue-600 text-sm cursor-pointer">View Details</p>
          </div>
        </div>

        {/* Highlights & Payment */}
        <div className="border p-4 rounded space-y-4 mt-4 flex flex-col md:flex-row md:justify-between">
          <div>
            <p className="text-sm font-semibold">Description</p>
            <ul className="list-disc text-sm ml-5 mt-2 text-gray-700 space-y-1">
              <li>
                {product.specifications.ram || product.specifications.material}
              </li>
              <li>
                {product.specifications.resolution ||
                  product.specifications.sole}
              </li>
              <li>
                {product.specifications.camera || product.specifications.weight}
              </li>
              <li>
                {product.specifications.battery || product.specifications.fit}
              </li>
              <li>
                {product.specifications.processor ||
                  product.specifications.color}
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold">Easy Payment Options</p>
            <ul className="list-disc text-sm ml-5 mt-2 text-gray-700 space-y-1">
              <li>No cost EMI starting from ₹5,667/month</li>
              <li>Cash on Delivery</li>
              <li>Net banking & Credit/Debit/ATM card</li>
            </ul>
            <p className="text-blue-600 text-sm mt-1 cursor-pointer">
              View Details
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
