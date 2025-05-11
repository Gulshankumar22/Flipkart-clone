import React from 'react';
import { useCart } from '../context/CartContext';

const Checkout = () => {
  const { cart, dispatch } = useCart();
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div className="p-4">
      <h2 className="text-2xl mb-4">Checkout</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cart.map(item => (
            <div key={item.id} className="border p-4 rounded">
              <h3 className="text-lg font-bold">{item.name}</h3>
              <p>Price: ${item.price}</p>
              <p>
                Quantity:
                <input
                  type="number"
                  value={item.qty}
                  min="1"
                  className="w-16 ml-2 border"
                  onChange={(e) => dispatch({ type: 'UPDATE_QTY', payload: { id: item.id, qty: parseInt(e.target.value) } })}
                />
              </p>
              <button
                className="mt-2 bg-red-500 text-white px-3 py-1 rounded"
                onClick={() => dispatch({ type: 'REMOVE_FROM_CART', payload: item.id })}
              >
                Remove
              </button>
            </div>
          ))}
          <div className="text-xl font-bold">Total: ${total.toFixed(2)}</div>
          <div className="mt-4">
            <p>Shipping to: 123 Main Street, City, Country</p>
            <button className="mt-2 bg-green-600 text-white px-4 py-2 rounded" onClick={() => alert('Order placed!')}>Place Order</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;