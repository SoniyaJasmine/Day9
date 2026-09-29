import { useNavigate } from "react-router-dom";
import "./Weddingcard.css";

import products from "../Data/products";
import { useCart } from "../Context/CartContext";
import { useWishlist } from "../Context/WishlistContext";

function Weddingcard() {
  const navigate = useNavigate();

  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();

  const handleAddToCart = (e, card) => {
    e.stopPropagation();

    addToCart(card, 1);
    navigate("/cart");
  };

  const handleWishlist = (e, card) => {
    e.stopPropagation();

    toggleWishlist(card);
  };

  return (
    <section className="wedding-section">

      <h2>Wedding Cards</h2>

      <div className="wedding-grid">

        {products.map((card) => {

          const wishlistActive = isInWishlist(card.id);

          return (
            <div
              className="wedding-card"
              key={card.id}
              onClick={() =>
                navigate(`/product-details/${card.id}`)
              }
            >

              <div className="wedding-image">

                <img
                  src={card.image}
                  alt={card.name}
                />

              </div>

              <div className="related-details">

                <h3>{card.name}</h3>

                <p>Rs. {card.price}</p>

                <div className="card-actions">

                  {/* Wishlist */}
                  <button
                    className={`wishlist-btn ${
                      wishlistActive ? "active" : ""
                    }`}
                    onClick={(e) =>
                      handleWishlist(e, card)
                    }
                    aria-label="Add to wishlist"
                  >
                    ♥
                  </button>

                  {/* Add to Cart */}
                  <button
                    className="add-cart-btn"
                    onClick={(e) =>
                      handleAddToCart(e, card)
                    }
                  >
                    Add to Cart
                  </button>

                </div>

              </div>

            </div>
          );
        })}

      </div>

    </section>
  );
}

export default Weddingcard;