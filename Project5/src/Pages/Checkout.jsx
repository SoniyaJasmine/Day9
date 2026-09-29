import { useCart } from "../Context/CartContext";
import { useNavigate } from "react-router-dom";
import "./Checkout.css";

function Checkout() {
  const navigate = useNavigate();

  const {
    cartItems,
    cartTotal,
  } = useCart();

  // Calculate values dynamically
  const subtotal = cartTotal;
  const shipping = 0;
  const total = subtotal + shipping;

  // Current date and time
  const now = new Date();

  const date = now.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  const time = now.toLocaleTimeString("en-IN", {
    hour: "numeric",
    minute: "2-digit",
  });

  // If cart is empty
  if (cartItems.length === 0) {
    return (
      <main className="checkout-page">
        <div className="checkout-container">
          <section className="order-summary empty-checkout">
            <h1>Your cart is empty</h1>

            <p>
              Please add products to your cart before checkout.
            </p>

            <button
              className="pay-button"
              onClick={() => navigate("/wedding-invitation")}
            >
              Continue Shopping
            </button>
          </section>
        </div>
      </main>
    );
  }

  return (
    <main className="checkout-page">

      <div className="checkout-container">

        {/* ================= PAYMENT SECTION ================= */}

        <section className="payment-section">

          {/* PAYMENT LOGOS */}

          <div className="payment-logos">

            <div className="payment-logo mastercard">
              <span className="circle red"></span>
              <span className="circle orange"></span>
              <small>mastercard</small>
            </div>

            <div className="payment-logo visa">
              VISA
            </div>

            <div className="payment-logo paypal">
              PayPal
            </div>

            <div className="payment-logo upi-logo">
              UPI
            </div>

          </div>


          {/* UPI */}

          <div className="upi-box">

            <h3>Pay by UPI</h3>

            <div className="upi-option">
              <span className="radio active"></span>

              <strong>Paytm</strong>

              <span className="upi-name">
                UPI
              </span>
            </div>

            <div className="upi-option">
              <span className="radio"></span>

              <strong>Gpay</strong>

              <span className="gpay-small">
                G Pay
              </span>
            </div>

            <div className="upi-option">
              <span className="radio active"></span>

              <strong>Phonepe</strong>

              <span className="phonepe-small">
                ॐ
              </span>
            </div>

            <div className="upi-option">
              <span className="radio active"></span>

              <strong>Cred</strong>

              <span className="cred-small">
                CRED
              </span>
            </div>

          </div>


          {/* CASH ON DELIVERY */}

          <button className="cod-button">
            <span>▣</span>
            Cash on Delivery
            <span className="cod-arrow">⌄</span>
          </button>


          {/* INFORMATION */}

          <p className="payment-note">
            <span>ⓘ</span>
            Credit card payments may take up to 24 hours
            to be processed!
          </p>


          <label className="save-payment">

            <input
              type="checkbox"
              defaultChecked
            />

            <span>
              Save my payments details for future purchase
            </span>

          </label>

        </section>


        {/* ================= ORDER SUMMARY ================= */}

        <section className="order-summary">

          <h1>Order Summary</h1>


          {/* DATE & TIME */}

          <div className="order-date">

            <div>
              <span>Date:</span>
              <strong>{date}</strong>
            </div>

            <div>
              <span>Time:</span>
              <strong>{time}</strong>
            </div>

          </div>


          {/* PRODUCTS */}

          <div className="products-section">

            <h2>Products</h2>

            {cartItems.map((item) => (
              <div
                className="product-row"
                key={item.id}
              >

                <span>
                  {item.name}
                </span>

                <span>
                  {item.quantity}
                </span>

              </div>
            ))}

          </div>


          {/* COUPON */}

          <div className="coupon">

            <strong>MAR0057</strong>

            <span>
              Coupon Applied
            </span>

          </div>


          {/* PRICE */}

          <div className="price-summary">

            <div>
              <span>Subtotal</span>

              <strong>
                Rs. {subtotal.toFixed(2)}
              </strong>
            </div>

            <div>
              <span>Shipping</span>

              <strong>
                Rs. {shipping.toFixed(2)}
                <small>Free</small>
              </strong>
            </div>

            <div>
              <span>Total</span>

              <strong>
                Rs. {total.toFixed(2)}
              </strong>
            </div>

          </div>


          {/* PAY BUTTON */}

          <button
            className="pay-button"
            onClick={() =>
              navigate("/orderplaced", {
                state: {
                  orderId: Date.now(),
                  items: cartItems,
                  subtotal: subtotal,
                  shipping: shipping,
                  discount: 0,
                  total: total,
                  customer: {
                    name: "Jhon",
                    email: "jhon057@gmail.com",
                    phone: "9876543210",
                    address: "123 Elm street",
                    city: "Anytown, ABC 12345",
                    country: "Anywhere",
                  },
                },
              })
            }
          >
            Pay Rs. {total.toFixed(2)}
          </button>

        </section>

      </div>

    </main>
  );
}

export default Checkout;