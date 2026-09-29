import "./Home.css";
import { useNavigate } from "react-router-dom";
import { useCart } from "../Context/CartContext";
import homeProducts from "../Data/homeProducts";

// import home from "../assets/Images/download__9_-removebg-preview.png";
import exclusive1 from "../assets/Images/Editable_Indian_Wedding_Invitations___Hindu_Wedding_Invite___Flower_Frame_Wedding_Card___Printable___Instant_Download___Corjl_IWIM_-_Etsy_UK-removebg-preview.png";
import exclusive2 from "../assets/Images/Invitation_Luxury_PSD__High_Quality_Free_PSD_Templates_for_Download___Freepik-removebg-preview.png";
import exclusive3 from "../assets/Images/Floral_Indian_wedding_invitation_card_design_in_frabic-removebg-preview.png";
import theme1 from "../assets/Images/Beach_Wedding_Invitation_Set__Wedding_Invitation_Template_2_Set__Editable_Wedding_Invitation__Editable_on_Canva___Digital_Download__Seashell-removebg-preview.png";
import theme2 from "../assets/Images/Evite_Paperless_Wedding_Invitation_Aqua_Love_Birds-removebg-preview.png";
import theme3 from "../assets/Images/Watercolor_Arabian_Lattice_Arch_Muslim_Wedding_Invitation-removebg-preview.png";
import collection1 from "../assets/Images/Indian-wedding-photography-Hindu_Wedding_Ceremony-feature.jpg";
import collection2 from "../assets/Images/christian-wedding-ceremony-scripts-and-vows-groom-bride-church-hall-officiant-sarehnour.webp";
import collection3 from "../assets/Images/612a9cdcb4663a91c56e949047ee0c3c.png";
import collection4 from "../assets/Images/hycroft-manor-settlement-building-wedding-aileen-choi-phot-paige-correyo-14-USED-ON-IG.jpg";
import testimonial1 from "../assets/Images/f7502e9c6f4e4faf3e6aaaca4aa381ef.jpg";
import testimonial2 from "../assets/Images/1956341beautiful-girl.webp";
import testimonial3 from "../assets/Images/wp4636702.jpg";
import letter from "../assets/Images/Free_Digital_Images_Vintage__Gif_And_Clip_Art_-_Artsy_Bee_Digital__294-removebg-preview.png"
import unique from "../assets/Images/luxury-wedding-invitation-template-free-vector.jpg";
import leftBorder from "../assets/Images/Free_Digital_Images_Vintage__Gif_And_Clip_Art_-_Artsy_Bee_Digital__294-removebg-preview.png";
import rightBorder from "../assets/Images/Three_Dimensional_Border_PNG_Transparent__Continental_Exquisite_Three_Dimensional_Pattern_White_Border__Continental__Fine__Three_Dimensional_PNG_Image_For_Free_Download-removebg-preview.png";
import circle from "../assets/Images/download__8_-removebg-preview.png";


const exclusiveCards = [
  {
    image: exclusive1,
    title: "Hindu Wedding Cards",
    path: "/hindu-wedding-cards"
  },
  {
    image: exclusive2,
    title: "Christian Wedding Cards",
    path: "/christian-wedding-cards"
  },
  {
    image: exclusive3,
    title: "Muslim Wedding Cards",
    path: "/muslim-wedding-cards"
  }
];

const themeCards = [
  {
    image: theme1,
    title: "Beach Theme Cards",
  },
  {
    image: theme2,
    title: "Birds Theme Cards",
  },
  {
    image: theme3,
    title: "Palace Theme Cards",
  },
];


const collections = [
  {
    image: collection1,
    title: "Hindu Invitation Collection",
    path: "/hindu-wedding-cards",

  },
  {
    image: collection2,
    title: "Christian Invitation Collection",
    path: "/christian-wedding-cards",

  },
  {
    image: collection3,
    title: "Muslim Invitation Collection",
    path: "/muslim-wedding-cards",

  },
  {
    image: collection4,
    title: "Traditional Invitation Collection",
  },
];

const testimonials = [
  {
    image: testimonial1,
    name: "James",
    title: "Absolutely beautiful invites!",
    text: "We were blown away by the quality and elegance of our wedding invitations. The paper felt luxurious, and the printing was flawless. Everyone keeps asking where we got them from!",
  },
  {
    image: testimonial2,
    name: "Harshitha",
    title: "Customized to perfection",
    text: "We wanted something simple but unique, and they absolutely nailed it. Colors, fonts, wording everything was exactly how we imagined. Fast turn around too!",
  },
  {
    image: testimonial3,
    name: "Santhosh",
    title: "Great quality at a great price.",
    text: "We were on a tight budget, but didn't want to compromise on style. These invites were not only affordable but looked premium. Arrived quickly and packaged beautifully",
  },
];

function Home() {

  const navigate = useNavigate();
  const { addToCart } = useCart();

  return (
    <main className="home" id="home">

      {/* ================= HERO ================= */}
      <section className="hero">
        <div className="hero-content">
          <h1>Your Love Story Begins Here</h1>

          <p>
            Create stunning wedding invitations that capture the essence
            of your special day. Elegant designs, beautiful words,
            and everything you need to make your first impression unforgettable.
          </p>

          <button className="primary-btn">
            Get Your style
          </button>
        </div>
      </section>


      {/* ================= EXCLUSIVE ================= */}
      <section className="section exclusive-section">

        <div className="section-banner">
          <img
            src={unique}
            alt="Exclusive invitation cards"
          />
        </div>

        <div className="section-heading">
          <h2>Unique & Exclusive Invitation Cards</h2>
          <p>
            Because each wedding is truly unique and memorable
          </p>
        </div>

        <div className="three-grid">
          {exclusiveCards.map((card, index) => (
            <div
              className="category-card"
              key={index}
              onClick={() => navigate(card.path)}
            >
              <div className="category-image">
                <img src={card.image} alt={card.title} />
              </div>

              <h3>{card.title}</h3>
            </div>
          ))}
        </div>

      </section>


      {/* ================= THEMES ================= */}
      <section className="section theme-section">

        <div className="section-heading">
          <h2>Theme Based Invitation</h2>
          <p>Theme Based Invitation</p>
        </div>

        <div className="three-grid">
          {themeCards.map((card, index) => (
            <div className="category-card" key={index}>
              <div className="category-image">
                <img src={card.image} alt={card.title} />
              </div>

              <h3>{card.title}</h3>
            </div>
          ))}
        </div>

      </section>


      {/* ================= PROMO ================= */}
      <section className="offer-section">

      {/* ================= LEFT OFFER ================= */}

      <div className="offer-card left-offer">

        {/* Border / Background Image */}
        <img
          src={leftBorder}
          alt=""
          className="offer-border"
        />

        {/* Circle Design */}
        <img
          src={circle}
          alt=""
          className="offer-circle"
        />

        {/* Content */}
        <div className="offer-text">
          <h3>
            Join our love-letters list and enjoy
            <br />
            20% off your first set of wedding
            <br />
            invitations.
          </h3>

          <p>
            Simple, beautiful, and easy on your budget.
          </p>
        </div>

        {/* Circle Text */}
        <div className="circle-text">
          Get 20% Off
          <br />
          Your First Order!
        </div>

      </div>


      {/* ================= RIGHT OFFER ================= */}

      <div className="offer-card right-offer">

        {/* Border / Background Image */}
        <img
          src={rightBorder}
          alt=""
          className="offer-border border1"
        />

        {/* Circle Design */}
        <img
          src={circle}
          alt=""
          className="offer-circle"
        />

        {/* Content */}
        <div className="offer-text">
          <h3>
            Planning ahead pays off! Book your
            <br />
            order 60+ days in advance and get
            <br />
            a free set of 20 extra invites for
            <br />
            last-minute guests.
          </h3>
        </div>

        {/* Circle Text */}
        <div className="circle-text">
          💍 Early Bird Bonus
        </div>

      </div>

    </section>


      {/* ================= PRODUCTS ================= */}
      <section className="section products-section">

        <div className="section-heading">
          <h2>Simple and Affordable Wedding Cards</h2>
        </div>

        <div className="products-grid">

          {homeProducts.map((product, index) => (
            <div className="product-card" key={index}>

              <div className="product-image">
                <img
                  src={product.image}
                  alt={product.title}
                />
              </div>

              <h3>{product.name}</h3>

              <div className="product-bottom">
                <span>{product.price}</span>

                <div className="product-icons">
                  <button>♡</button>
                  <button onClick={() => addToCart(product, 1)}
                    >🛒</button>
                </div>
              </div>

            </div>
          ))}

        </div>

      </section>


      {/* ================= SUMMER ================= */}
      <section className="summer-banner">

        <img
          src={letter}
          alt="Summer offer"
        />

        <div className="summer-content">
          <div className="content1">
            <h2>Summer <span>sale</span></h2>

            <div className="discounts">
              <p>100 cards - 10% off</p>
              <p>200 cards - 15% off</p>
              <p>300 cards - 20% off</p>
              <p>400 cards - 25% off</p>
              <p>500 cards - 30% off</p>
            </div>
          </div>

          <button className="summer-btn">
            Stock Clearance - 40% to 60% off
          </button>

          <h4>
            This offer is not applicable on customized card, E-cards and Luxury boxes.
          </h4>
        </div>

      </section>


      {/* ================= COLLECTION ================= */}
      <section className="section collection-section">

        <div className="collections-grid">

          {collections.map((collection, index) => (
            <div className="collection-card" key={index}>

              <img
                src={collection.image}
                alt={collection.title}
              />

              <h3>{collection.title}</h3>

              <button className="buy-btn"   onClick={() => navigate(collection.path)}
>
                Buy Now
              </button>

            </div>
          ))}

        </div>

      </section>


      {/* ================= TESTIMONIALS ================= */}
      <section className="section testimonials-section">

        <div className="section-heading">
          <h2>WHAT CLIENT SAY ABOUT US</h2>
        </div>

        <div className="testimonials-grid">

          {testimonials.map((client, index) => (
            <div className="testimonial-card" key={index}>

              <img
                src={client.image}
                alt={client.name}
                className="client-image"
              />

              <h3>{client.name}</h3>

              <h4>{client.title}</h4>

              <p>{client.text}</p>

              <div className="stars">
                ★ ★ ★ ★ ★
              </div>

            </div>
          ))}

        </div>

      </section>


      {/* ================= HOW IT WORKS ================= */}
      <section className="section how-section">

        <div className="section-heading">
          <h2>How It Works</h2>
        </div>

        <div className="steps">

          <div className="step">
            <div className="step-icon">📋</div>
            <h3>Choose a Card</h3>
          </div>

          <div className="step">
            <div className="step-icon">📝</div>
            <h3>Customize Your Design</h3>
          </div>

          <div className="step">
            <div className="step-icon">☑️</div>
            <h3>Approve Your Design</h3>
          </div>

          <div className="step">
            <div className="step-icon">📦</div>
            <h3>Place Your Order</h3>
          </div>

          <div className="step">
            <div className="step-icon">🚚</div>
            <h3>Get Your Delivery</h3>
          </div>

        </div>

      </section>
       

    </main>
  );
}

export default Home;