import { useLocation, useNavigate } from "react-router-dom";
import "./OrderPlaced.css";

function OrderPlaced() {
  const navigate = useNavigate();
  const location = useLocation();

  const order = location.state;

  // If someone directly opens /orderplaced without completing checkout
  if (!order || !order.items || order.items.length === 0) {
    return (
      <main className="order-page">
        <section className="order-content">
          <div className="order-left">
            <h1>No Order Found</h1>
            <p>Please complete checkout first.</p>

            <button
              className="continue-shopping"
              onClick={() => navigate("/")}
            >
              Continue Shopping
            </button>
          </div>
        </section>
      </main>
    );
  }

  const {
    orderId,
    items,
    subtotal,
    shipping,
    discount,
    total,
    customer,
  } = order;

  return (
    <main className="order-page">

      {/* ================= CONFIRMATION ================= */}

      <section className="confirmation-section">

        <div className="confirmation-circle">

          <div className="confirmation-text">

            <svg viewBox="0 0 500 250">

              <defs>
                <path
                  id="textCurve"
                  d="M 50,220 A 200,200 0 0,1 450,220"
                  fill="none"
                />
              </defs>

              <text>
                <textPath
                  href="#textCurve"
                  startOffset="50%"
                >
                  O R D E R &nbsp; C O N F I R M E D
                </textPath>
              </text>

            </svg>

          </div>

          <span className="butterfly butterfly-1">🦋</span>
          <span className="butterfly butterfly-2">🦋</span>
          <span className="butterfly butterfly-3">🦋</span>
          <span className="butterfly butterfly-4">🦋</span>

          <div className="confirm-check">
            ✓
          </div>

        </div>

      </section>


      {/* ================= ORDER CONTENT ================= */}

      <section className="order-content">

        {/* ================= LEFT SIDE ================= */}

        <div className="order-left">

          <h1>Your Order</h1>

          <h3>
            Order ID: {orderId}
          </h3>

          <h3>
            Thank You!&nbsp; Your Order has been confirmed.
          </h3>


          {/* ================= PRODUCTS ================= */}

          {items.map((item) => (

            <div
              className="ordered-product"
              key={item.id}
            >

              <div className="product-image-box">

                <img
                  src={item.image}
                  alt={item.name}
                />

              </div>


              <div className="sku-box">

                <strong>
                  {item.name}
                </strong>

                <strong>
                  SKU: {item.sku || item.id}
                </strong>

                <span>
                  Quantity: {item.quantity}
                </span>

              </div>


              <strong className="product-price">
                Rs. {(item.price * item.quantity).toFixed(2)}
              </strong>


              <button
                className="delete-button"
                type="button"
              >
                🗑
              </button>

            </div>

          ))}


          {/* ================= ORDER SUMMARY ================= */}

          <div className="placed-summary">

            <h2>Order Summary</h2>


            <div className="summary-row">

              <span>
                Subtotal
              </span>

              <strong>
                Rs. {subtotal.toFixed(2)}
              </strong>

            </div>


            <div className="summary-row">

              <span>
                Shipping Charge
              </span>

              <strong>
                Rs. {shipping.toFixed(2)}
              </strong>

            </div>


            <div className="summary-row">

              <span>
                Taxes
              </span>

              <strong>
                Included
              </strong>

            </div>


            <div className="summary-row">

              <span>
                Discount
              </span>

              <strong>
                Rs. {discount.toFixed(2)}
              </strong>

            </div>


            <div className="summary-total">

              <strong>
                Total
              </strong>

              <strong>
                Rs. {total.toFixed(2)}
              </strong>

            </div>

          </div>

        </div>


        {/* ================= RIGHT SIDE ================= */}

        <aside className="customer-details">


          {/* ================= CUSTOMER ================= */}

          <div className="customer-box">

            <h2>
              Customer
            </h2>

            <p>

              <span className="detail-icon">
                ♙
              </span>

              {customer.name}

            </p>

            <p>

              <span className="detail-icon">
                ♧
              </span>

              {items.reduce(
                (total, item) => total + item.quantity,
                0
              )}{" "}
              item(s)

            </p>

          </div>


          {/* ================= CUSTOMER INFORMATION ================= */}

          <div className="customer-box">

            <h2>
              Customer Information
            </h2>

            <p>

              <span className="detail-icon">
                ✉
              </span>

              {customer.email}

            </p>

            <p>

              <span className="detail-icon">
                ☎
              </span>

              {customer.phone}

            </p>

          </div>


          {/* ================= SHIPPING ================= */}

          <div className="customer-box">

            <h2>
              Shipping Address
            </h2>

            <p>

              <span className="detail-icon">
                ♙
              </span>

              {customer.name}

            </p>

            <p className="address">

              {customer.address}
              <br />

              {customer.city}
              <br />

              {customer.country}

            </p>

          </div>


          {/* ================= BILLING ================= */}

          <div className="customer-box billing-box">

            <h2>
              Billing Address
            </h2>

            <p>
              Same as Shipping address
            </p>

          </div>

        </aside>

      </section>


      {/* ================= CONTINUE SHOPPING ================= */}

      <button
        className="continue-shopping"
        onClick={() => navigate("/")}
      >
        Continue Shopping
      </button>

    </main>
  );
}

export default OrderPlaced;