import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

function Cart() {
  const { cartItems, removeFromCart, updateCartItemQuantity, calculateTotalPrice } = useContext(CartContext);

  const handleQuantityChange = (itemId, event) => {
    const newQuantity = parseInt(event.target.value);
    updateCartItemQuantity(itemId, newQuantity);
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul className="list-group">
        {cartItems.map((item) => (
          <li key={item.id} className="list-group-item">
            <div className="row align-items-center">
              <div className="col-auto">
                <img src={item.image} alt={item.title} style={{ maxWidth: '100px' }} />
              </div>
              <div className="col">
                <h4>{item.title}</h4>
                <p>Price per item: ${item.price}</p>
                <label>Quantity:</label>
                <input
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={(e) => handleQuantityChange(item.id, e)}
                />
                <p>Total: ${item.price * item.quantity}</p>
              </div>
              <div className="col-auto">
                <button className="btn btn-danger" onClick={() => removeFromCart(item.id)}>
                  Remove
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-3">
        <h5>Total Price: ${calculateTotalPrice()}</h5>
      </div>
    </div>
  );
}

export default Cart;
