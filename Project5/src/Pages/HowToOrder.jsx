import "./HowToOrder.css";

function HowToOrder() {
  return (
    <main className="how-to-order-page">

      {/* ================= PAGE CONTENT ================= */}

      <section className="how-to-order-container">

        <h1>
          How do I order wedding cards from Wed Knot Craft online?
        </h1>


        {/* ================= STEP 1 ================= */}

        <div className="order-step">

          <p>
            <strong>Browse the Collection:</strong>{" "}
            Take your time to explore our collection and discover various
            designs that suit your style and preferences. You can use the
            search filters to narrow down your options based on themes,
            colors, or card types.
          </p>

        </div>


        {/* ================= STEP 2 ================= */}

        <div className="order-step">

          <p>
            <strong>Select a Design:</strong>{" "}
            Once you have found a design that catches your eye, click on it
            to view more details. You can zoom in to see the intricate
            details and read the card description to ensure it meets your
            requirements.
          </p>

        </div>


        {/* ================= STEP 3 ================= */}

        <div className="order-step">

          <p>
            <strong>Add to Cart:</strong>{" "}
            Once you are happy with your design, select the quantity and
            click on the "Add to Cart" button to proceed to the next step.
          </p>

        </div>


        {/* ================= STEP 4 ================= */}

        <div className="order-step">

          <p>
            <strong>Review Your Order:</strong>{" "}
            In the shopping cart, you will be able to review your order
            summary, including the quantity, price, and any additional
            services you have selected.
          </p>

        </div>


        {/* ================= STEP 5 ================= */}

        <div className="order-step">

          <p>
            <strong>Secure Payment:</strong>{" "}
            King of Cards offers a secure online payment system. Choose
            your preferred payment method and enter the necessary details
            to complete your transaction.
          </p>

        </div>


        {/* ================= STEP 6 ================= */}

        <div className="order-step">

          <p>
            <strong>Place Your Order:</strong>{" "}
            After confirming your payment, you will receive an order
            confirmation via email, along with an estimated delivery date.
          </p>

        </div>

      </section>

    </main>
  );
}

export default HowToOrder;