import { useNavigate } from "react-router-dom";
import "./ChristianWeddingCards.css";

import christianProducts from "../Data/christianProduct";
import { useCart } from "../Context/CartContext";
import { useWishlist } from "../Context/WishlistContext";

function ChristianWeddingCards() {
  const navigate = useNavigate();

  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();

  const handleAddToCart = (e, product) => {
    e.stopPropagation();
    addToCart(product, 1);
    navigate("/cart");
  };

  const handleWishlist = (e, product) => {
    e.stopPropagation();
    toggleWishlist(product);
  };

  return (
    <section className="christian-section">

      <div className="christian-heading">
        <h2>Christian Wedding Cards</h2>
        <p>Beautiful and elegant designs for your special day</p>
      </div>

      <div className="christian-grid">

        {christianProducts.map((card) => {

          const wishlistActive = isInWishlist(card.id);

          return (
            <div
              className="christian-card"
              key={card.id}
              onClick={() =>
                navigate(`/product-details/${card.id}`)
              }
            >

              <div className="christian-image">
                <img
                  src={card.image}
                  alt={card.name}
                />
              </div>

              <div className="christian-details">

                <h3>{card.name}</h3>

                <p className="christian-price">
                  Rs. {card.price}
                </p>

                <div className="christian-actions">

                  <button
                    className={`christian-wishlist ${
                      wishlistActive ? "active" : ""
                    }`}
                    onClick={(e) =>
                      handleWishlist(e, card)
                    }
                  >
                    ♥
                  </button>

                  <button
                    className="christian-cart"
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

export default ChristianWeddingCards;