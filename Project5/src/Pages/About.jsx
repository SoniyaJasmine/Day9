import "./About.css";

// Change these imports to your actual image filenames
import weddingImage from "../assets/Images/christian-wedding-ceremony-scripts-and-vows-groom-bride-church-hall-officiant-sarehnour.webp";
import storyImage from "../assets/Images/Illustration_of_a_Muslim_wedding_couple_wearing_black_clothes___Premium_AI-generated_image-removebg-preview.png";
import promiseImage from "../assets/Images/download__3_-removebg-preview.png";

function AboutUs() {
  return (
    <div className="about-page">

      {/* ================= ABOUT TITLE ================= */}

      <section className="about-heading">
        <h1>ABOUT US</h1>
      </section>


      {/* ================= SECTION 1 ================= */}

      <section className="about-section about-section-one">

        <div className="about-content">
          <h2>
            Celebrating Love, One Invitation at a Time
          </h2>

          <p>
            At Wed Knot Craft, we believe that every love story
            is unique and deserves to be celebrated in a way
            that reflects its individuality.
          </p>
        </div>

        <div className="about-image">
          <img
            src={weddingImage}
            alt="Wedding invitation"
          />
        </div>

      </section>


      {/* ================= OUR STORY ================= */}

      <section className="about-section story-section">

        <div className="about-image">
          <img
            src={storyImage}
            alt="Pre wedding"
          />
        </div>

        <div className="about-content">

          <h2>OUR STORY</h2>

          <p>
            What started as a passion for design has blossomed
            into a full-fledged business dedicated to bringing
            couples' visions to life.
          </p>

          <p>
            Our founder, [Founder's Name], envisioned a platform
            where couples could find invitations that resonated
            with their personal style and cultural heritage.
          </p>

        </div>

      </section>


      {/* ================= OUR PROMISE ================= */}

      <section className="about-section promise-section">

        <div className="about-content">

          <h2>OUR PROMISE</h2>

          <p>
            We are committed to providing:
          </p>

          <ul>

            <li>
              <strong>Custom Designs:</strong>{" "}
              Tailored invitations that reflect your unique
              love story.
            </li>

            <li>
              <strong>Quality Craftsmanship:</strong>{" "}
              Invitations crafted with attention to detail
              and high-quality materials.
            </li>

            <li>
              <strong>Customer Satisfaction:</strong>{" "}
              A seamless experience from selection to delivery,
              ensuring your complete satisfaction.
            </li>

          </ul>

        </div>

        <div className="about-image">
          <img
            src={promiseImage}
            alt="Wedding couple"
          />
        </div>

      </section>


      {/* ================= CTA ================= */}

      <section className="about-cta">

        <h2>
          JOIN Us in Celebrating Your Special Day
        </h2>

        <p>
          Explore our diverse range of designs and let us help
          you set the tone for your wedding celebration.
          At Wed Knot Craft, your love story is our inspiration.
        </p>

      </section>

    </div>
  );
}

export default AboutUs;