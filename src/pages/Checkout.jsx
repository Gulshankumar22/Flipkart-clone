import React from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";


const Checkout = () => {
  const { cart, dispatch } = useCart();
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div className="flex flex-col md:flex-row gap-4 p-6 bg-gray-100 min-h-screen">
      {/* Left Section */}
      <div className="flex-1 bg-white rounded shadow-md p-4">
        <div className="border-b pb-2 mb-4">
          <h2 className="text-xl font-semibold text-blue-600">Flipkart </h2>
          <p className="text-sm mt-1">
            Deliver to:{" "}
            <span className="font-semibold text-black">New Delhi - 110062</span>{" "}
            <button className="ml-2 text-blue-500 border px-2 py-1 rounded">
              Change
            </button>
          </p>
        </div>

        {cart.map((item) => (
          <div
            key={item.id}
            className="flex flex-col md:flex-row gap-4 items-start border-b pb-4 mb-4"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-24 h-24 object-cover"
            />
            <div className="flex-1">
              <h3 className="text-lg font-semibold">{item.name}</h3>
              <p className="text-sm text-gray-600">
                Seller: BTPLD{" "}
                <span className="ml-1 text-blue-600 font-medium">Assured</span>
              </p>
              <p className="text-sm">
                Delivery by 11 PM, Tomorrow{" "}
                <span className="text-green-600">Free</span>
              </p>
              <p className="mt-2">
                <span className="line-through text-gray-500 mr-2">
                  ₹{item.originalPrice}
                </span>
                <span className="text-lg font-bold text-black">
                  ₹{item.price}
                </span>
                <span className="text-green-600 ml-2">
                  {item.discount}% Off
                </span>
              </p>
              <div className="mt-2 flex items-center gap-2">
                <button
                  className="px-2 py-1 bg-gray-200 rounded"
                  onClick={() =>
                    dispatch({
                      type: "UPDATE_QTY",
                      payload: { id: item.id, qty: item.qty - 1 },
                    })
                  }
                >
                  -
                </button>
                <span>{item.qty}</span>
                <button
                  className="px-2 py-1 bg-gray-200 rounded"
                  onClick={() =>
                    dispatch({
                      type: "UPDATE_QTY",
                      payload: { id: item.id, qty: item.qty + 1 },
                    })
                  }
                >
                  +
                </button>
                <button className="ml-4 text-blue-600 text-sm">
                  SAVE FOR LATER
                </button>
                <button
                  className="ml-2 text-red-600 text-sm"
                  onClick={() =>
                    dispatch({ type: "REMOVE_FROM_CART", payload: item.id })
                  }
                >
                  REMOVE
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/3 bg-white rounded shadow-md p-4 h-fit">
        <h3 className="font-semibold text-lg border-b pb-2 mb-4">
          PRICE DETAILS
        </h3>
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Price ({cart.length} item)</span>
            <span>
              ₹
              {cart.reduce(
                (sum, item) => sum + item.originalPrice * item.qty,
                0
              )}
            </span>
          </div>
          <div className="flex justify-between text-sm">
            <span>Discount</span>
            <span className="text-green-600">
              -₹
              {cart.reduce(
                (sum, item) =>
                  (item.originalPrice - item.price) * item.qty + sum,
                0
              )}
            </span>
          </div>
          <div className="flex justify-between text-sm">
            <span>Delivery Charges</span>
            <span className="text-green-600">Free</span>
          </div>
        </div>
        <div className="flex justify-between font-bold mt-4">
          <span>Total Amount</span>
          <span>₹{total.toFixed(2)}</span>
        </div>
        <p className="text-green-600 text-sm mt-2">
          You will save ₹
          {cart.reduce(
            (sum, item) => (item.originalPrice - item.price) * item.qty + sum,
            0
          )}{" "}
          on this order
        </p>

        <button
          onClick={() => alert("Order placed!")}
          className="w-full bg-orange-500 text-white font-semibold py-2 mt-6 rounded"
        >
          PLACE ORDER
        </button>
        <p className="text-xs text-gray-500 mt-2">
          Safe and Secure Payments. Easy returns. 100% Authentic products.
        </p>
      </div>
    </div>
  );
};

export default Checkout;
