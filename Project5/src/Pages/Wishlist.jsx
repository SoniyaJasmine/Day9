import { useNavigate } from "react-router-dom";
import { useWishlist } from "../Context/WishlistContext";
import { useCart } from "../Context/CartContext";
import "./Wishlist.css";

function Wishlist() {
  const navigate = useNavigate();

  const {
    wishlistItems,
    toggleWishlist,
  } = useWishlist();

  const { addToCart } = useCart();

  const handleAddToCart = (item) => {
    addToCart(item, 1);
    navigate("/cart");
  };

  if (wishlistItems.length === 0) {
    return (
      <section className="wishlist-container empty-wishlist">

        <h2>My Wishlist</h2>

        <p>Your wishlist is empty.</p>

        <button
          className="continue-btn"
          onClick={() => navigate("/wedding-invitation")}
        >
          Continue Shopping
        </button>

      </section>
    );
  }

  return (
    <section className="wishlist-container">

      <h2>My Wishlist</h2>

      <div className="wishlist-grid">

        {wishlistItems.map((item) => (

          <div
            className="wishlist-card"
            key={item.id}
          >

            <div
              className="wishlist-image"
              onClick={() =>
                navigate(`/product-details/${item.id}`)
              }
            >
              <img
                src={item.image}
                alt={item.name}
              />
            </div>

            <div className="wishlist-details">

              <h3>{item.name}</h3>

              <p>Rs. {item.price}</p>

              <div className="wishlist-actions">

                <button
                  className="remove-wishlist"
                  onClick={() => toggleWishlist(item)}
                >
                  ♥ Remove
                </button>

                <button
                  className="wishlist-cart-btn"
                  onClick={() => handleAddToCart(item)}
                >
                  Add to Cart
                </button>

              </div>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Wishlist;