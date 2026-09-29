import "./Search.css";

import hindu1 from "../assets/Images/Premium Vector _ Indian wedding invitation card template design.jpg";
import hindu2 from "../assets/Images/vector-simple-romantic-floral-celebration-wedding-card-invitation.jpg";
import hindu3 from "../assets/Images/Premium Vector _ Wedding stationery for indian couple with oriental ornaments.jpg";
import hindu4 from "../assets/Images/Buy_Scroll_Wedding_Invitations___Personalized___Vintage_Styles-removebg-preview.png";
import hindu5 from "../assets/Images/luxury-wedding-invitation-card-design-set-vector.jpg";
import imgae1 from "../assets/Images/stamp.jpg";
import imgae2 from "../assets/Images/scroll.jpg";
import imgae3 from "../assets/Images/theme.webp";
import imgae4 from "../assets/Images/CUSTOM-WEDDING-CARDS-AND-ENVELOPES-5.webp";
import imgae5 from "../assets/Images/laser.jpg";
import imgae6 from "../assets/Images/hindu.webp";


const ideas = [
  {
    image: hindu1,
    title: "Hindu wedding Card",
    color: "#f6bd6b",
  },
  {
    image: hindu2,
    title: "Simple wedding Card",
    color: "#d5b53f",
  },
  {
    image: hindu3,
    title: "Muslim wedding Card",
    color: "#a88a60",
  },
  {
    image: hindu4,
    title: "Scroll wedding Card",
    color: "#2693c8",
  },
  {
    image: hindu5,
    title: "Luxury wedding Card",
    color: "#99518e",
  },
];

const popular = [
  {
    image: imgae1,
    title: "Post Theme Wedding Card",
    color: "#7da5a6",
  },
  {
    image: imgae2,
    title: "Scroll Wedding Card",
    color: "#c3c8c9",
  },
  {
    image: imgae3,
    title: "Theme Wedding Card",
    color: "#c1aa7b",
  },
  {
    image: imgae4,
    title: "Customize Wedding Card",
    color: "#b55470",
  },
  {
    image: imgae5,
    title: "Laser Wedding Card",
    color: "#bea06e",
  },
  {
    image: imgae6,
    title: "Hindu Wedding Card",
    color: "#c48eaa",
  },
];

const categories = [
  "Wedding Cards",
  "Scroll Cards",
  "Theme Cards",
  "Birthday Cards",
  "Engagement Cards",
];

function Search() {
  return (
    <main className="search-page">

      {/* =========================
          SEARCH HERO
      ========================= */}
      <section className="search-hero">

        <h1>
          Everything You Need, to Plan Your Dream Wedding
        </h1>

        <p>
          Search for vendors, cards, ideas and real wedding
          stories and more!
        </p>


        {/* Search box */}
        <div className="search-main-box">

          <button className="all-button">
            All
          </button>

          <input
            type="text"
            placeholder="Search"
          />

        </div>


        {/* Category chips */}
        <div className="search-tags">

          {categories.map((category) => (
            <button
              className="search-tag"
              key={category}
            >
              <span>{category}</span>

              <span className="tag-close">
                ×
              </span>
            </button>
          ))}

        </div>

      </section>


      {/* =========================
          IDEAS FOR YOU
      ========================= */}
      <section className="search-section">

        <h2>Ideas for you</h2>

        <div className="search-card-grid">

          {ideas.map((item) => (
            <SearchCard
              key={item.title}
              item={item}
            />
          ))}

        </div>

      </section>


      {/* =========================
          POPULAR
      ========================= */}
      <section className="search-section popular-section">

        <h2>Popular on this</h2>

        <div className="search-card-grid">

          {popular.map((item) => (
            <SearchCard
              key={item.title}
              item={item}
            />
          ))}

        </div>

      </section>

    </main>
  );
}


/* =========================
   SEARCH CARD
========================= */

function SearchCard({ item }) {
  return (
    <div
      className="search-result-card"
      style={{
        "--card-color": item.color,
      }}
    >

      <div className="search-card-image">
        <img
          src={item.image}
          alt={item.title}
        />
      </div>

      <div className="search-card-title">
        <h3>{item.title}</h3>
      </div>

    </div>
  );
}

export default Search;