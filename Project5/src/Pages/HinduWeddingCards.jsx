import { useNavigate } from "react-router-dom";
import "./HinduWeddingCards.css";

import hinduProducts from "../Data/hinduProducts";
import { useCart } from "../Context/CartContext";
import { useWishlist } from "../Context/WishlistContext";

function HinduWeddingCards() {
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
    <section className="hindu-section">

      <div className="hindu-heading">
        <h2>Hindu Wedding Cards</h2>
        <p>
          Beautiful traditional designs for your special day
        </p>
      </div>

      <div className="hindu-grid">

        {hinduProducts.map((card) => {

          const wishlistActive = isInWishlist(card.id);

          return (
            <div
              className="hindu-card"
              key={card.id}
              onClick={() =>
                navigate(`/product-details/${card.id}`)
              }
            >

              <div className="hindu-image">
                <img
                  src={card.image}
                  alt={card.name}
                />
              </div>

              <div className="hindu-details">

                <h3>{card.name}</h3>

                <p className="hindu-price">
                  Rs. {card.price}
                </p>

                <div className="hindu-actions">

                  <button
                    className={`hindu-wishlist ${
                      wishlistActive ? "active" : ""
                    }`}
                    onClick={(e) =>
                      handleWishlist(e, card)
                    }
                  >
                    ♥
                  </button>

                  <button
                    className="hindu-cart"
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

export default HinduWeddingCards;