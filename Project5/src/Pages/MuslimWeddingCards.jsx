import { useNavigate } from "react-router-dom";
import "./MuslimWeddingCards.css";

import muslimProducts from "../Data/muslimProduct";
import { useCart } from "../Context/CartContext";
import { useWishlist } from "../Context/WishlistContext";

function MuslimWeddingCards() {
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
    <section className="muslim-section">

      <div className="muslim-heading">
        <h2>Muslim Wedding Cards</h2>
        <p>Beautiful and elegant designs for your special day</p>
      </div>

      <div className="muslim-grid">

        {muslimProducts.map((card) => {

          const wishlistActive = isInWishlist(card.id);

          return (
            <div
              className="muslim-card"
              key={card.id}
              onClick={() =>
                navigate(`/product-details/${card.id}`)
              }
            >

              <div className="muslim-image">
                <img
                  src={card.image}
                  alt={card.name}
                />
              </div>

              <div className="muslim-details">

                <h3>{card.name}</h3>

                <p className="muslim-price">
                  Rs. {card.price}
                </p>

                <div className="muslim-actions">

                  <button
                    className={`muslim-wishlist ${
                      wishlistActive ? "active" : ""
                    }`}
                    onClick={(e) =>
                      handleWishlist(e, card)
                    }
                  >
                    ♥
                  </button>

                  <button
                    className="muslim-cart"
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

export default MuslimWeddingCards;