import { useState } from "react";
import "./Cart.css";
import { useNavigate } from "react-router-dom";
import { useCart } from "../Context/CartContext";

function Cart() {
  const navigate = useNavigate();

  const {
    cartItems,
    cartTotal,
    updateQuantity,
    removeFromCart,
  } = useCart();

  const [discount, setDiscount] = useState(18);

  const taxRate = 18;

  // Empty cart
  if (cartItems.length === 0) {
    return (
      <div className="cart-container empty-cart">
        <h2>Your Cart is Empty</h2>

        <p>
          Add some wedding cards to your cart to continue shopping.
        </p>

        <button
          className="continue-btn"
          onClick={() => navigate("/")}
        >
          Continue Shopping
        </button>
      </div>
    );
  }

  // Calculations
  const subTotal = cartTotal;

  const discountAmount =
    (subTotal * discount) / 100;

  const taxableAmount =
    subTotal - discountAmount;

  const taxAmount =
    (taxableAmount * taxRate) / 100;

  const total =
    taxableAmount + taxAmount;

  // Total quantity
  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  // Checkout rule
const canCheckout = cartItems.length > 0;
  return (
    <div className="cart-container">

      {/* Header */}
      <div className="cart-header">
        <div>Product</div>
        <div>Qty</div>
        <div>Unit Price</div>
        <div>Tax</div>
        <div>Price</div>
      </div>

      {/* Products */}
      {cartItems.map((item) => (

        <div
          className="product-row"
          key={item.id}
        >

          {/* Product */}
          <div className="product-info">

            <img
              src={item.image}
              alt={item.name}
              className="cart-product-image"
            />

            <div className="product-box">
              <strong>
                {item.name}
              </strong>

              {item.sku && (
                <span>
                  SKU: {item.sku}
                </span>
              )}

              <button
                className="remove-btn"
                onClick={() =>
                  removeFromCart(item.id)
                }
              >
                Remove
              </button>
            </div>

          </div>

          {/* Quantity */}
          <div className="quantity-section">

            <button
              onClick={() =>
                updateQuantity(
                  item.id,
                  item.quantity - 1
                )
              }
              disabled={item.quantity <= 1}
            >
              −
            </button>

            <span>
              {item.quantity}
            </span>

            <button
              onClick={() =>
                updateQuantity(
                  item.id,
                  item.quantity + 1
                )
              }
            >
              +
            </button>

          </div>

          {/* Unit Price */}
          <div className="unit-price">
            Rs.{Number(item.price).toFixed(2)}
          </div>

          {/* Tax */}
          <div className="tax">
            {taxRate}%
          </div>

          {/* Product Price */}
          <div className="price">
            Rs.
            {(item.price * item.quantity).toFixed(2)}
          </div>

        </div>

      ))}

      {/* Summary */}
      <div className="summary">

        <div className="summary-row">
          <span>Sub Total:</span>

          <span>
            Rs.{subTotal.toFixed(2)}
          </span>
        </div>

        {/* Discount */}
        <div className="summary-row discount-row">

          <span>Discount:</span>

          <div className="discount-input">

            <input
              type="number"
              min="0"
              max="100"
              value={discount}
              onChange={(e) =>
                setDiscount(
                  Math.min(
                    100,
                    Math.max(
                      0,
                      Number(e.target.value)
                    )
                  )
                )
              }
            />

            <span>%</span>

          </div>

        </div>

        {/* Discount Amount */}
        <div className="summary-row">

          <span>
            Discount Amount:
          </span>

          <span>
            - Rs.{discountAmount.toFixed(2)}
          </span>

        </div>

        {/* Tax */}
        <div className="summary-row">

          <span>
            Total Tax:
          </span>

          <span>
            Rs.{taxAmount.toFixed(2)}
          </span>

        </div>

        {/* Total */}
        <div className="summary-row total-row">

          <span>
            Total:
          </span>

          <span>
            Rs.{total.toFixed(2)}
          </span>

        </div>

      </div>

      {/* Minimum Items Message */}
      {!canCheckout && (

        <div className="minimum-message">

          TO CHECKOUT PLEASE ADD MINIMUM 100
          ITEMS TO THE CART

        </div>

      )}

      {canCheckout && (

        <div className="success-message">

          You can proceed to checkout.

        </div>

      )}

      {/* Buttons */}
      <div className="button-section">

        <button
          className="continue-btn"
          onClick={() => navigate("/")}
        >
          Continue Shopping
        </button>

        <button
          className="checkout-btn"
          disabled={!canCheckout}
          onClick={() => navigate("/checkout")}
        >
          Checkout
        </button>

      </div>

    </div>
  );
}

export default Cart;