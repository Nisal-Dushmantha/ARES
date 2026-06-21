import React from 'react';
import { Link } from 'react-router-dom';
import './Cart.css';

function Cart({ cartItems, removeFromCart, updateQuantity }) {
  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div className="cart">
      <h1>Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <p>Your cart is empty</p>
          <Link to="/" className="continue-shopping-btn">Continue Shopping</Link>
        </div>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map(item => (
              <div key={`${item._id}-${item.size}-${item.color}`} className="cart-item">
                <div className="cart-item-image">
                  <div className="cart-image-placeholder">{item.category}</div>
                </div>

                <div className="cart-item-info">
                  <h3>{item.name}</h3>
                  <p className="item-details">
                    Size: <strong>{item.size}</strong> | Color: <strong>{item.color}</strong>
                  </p>
                  <p className="item-price">${item.price}</p>
                </div>

                <div className="cart-item-quantity">
                  <button onClick={() => updateQuantity(item._id, item.quantity - 1)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item._id, item.quantity + 1)}>+</button>
                </div>

                <div className="cart-item-subtotal">
                  <p>${(item.price * item.quantity).toFixed(2)}</p>
                </div>

                <button 
                  className="remove-btn"
                  onClick={() => removeFromCart(item._id)}
                  title="Remove item"
                >
                  ×
                </button>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <div className="summary-row">
              <span>Subtotal:</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <div className="summary-row">
              <span>Shipping:</span>
              <span>Free</span>
            </div>
            <div className="summary-row total">
              <span>Total:</span>
              <span>${total.toFixed(2)}</span>
            </div>

            <Link to="/checkout" className="checkout-btn">Proceed to Checkout</Link>
            <Link to="/" className="continue-shopping-link">Continue Shopping</Link>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
