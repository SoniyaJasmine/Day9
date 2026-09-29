import { useState } from "react";
import "./Contact.css";

import call from "../assets/images/Background+Border.png";

function Contact() {

  const [openFAQ, setOpenFAQ] = useState(0);

  const faqs = [
    {
      question: "What IT services do you specialize in?",
      answer:
        "We specialize in web development, software solutions, automation, and customized IT services for businesses."
    },
    {
      question: "How long does a typical system integration take?",
      answer:
        "Depending on the scope and complexity of your existing infrastructure, a standard integration project takes between 4 to 8 weeks from the initial technical consultation to final launch. We ensure to keep your team fully updated at every key milestone."
    },
    {
      question: "Do you offer ongoing 24/7 technical support?",
      answer:
        "Yes. We provide ongoing technical support to help businesses maintain reliable and smooth IT operations."
    },
    
  ];

  

  return (
    <div className="contact-page">

      {/* HERO SECTION */}

      <section className="contact-hero">

        <div className="hero-content">

          <h1>
            Let’s Build Your
            <br />
            <span>Future Together</span>
          </h1>

          <p>
            Contact Vetri IT Solutions for IT solutions,
            web development, internships, online courses, placements,
            and business consultation.
          </p>

          <div className="hero-buttons">

            <button className="call-btn">
              ☎ Call Now
            </button>

            <button className="enquiry-btn">
              ✉ Send Enquiry
            </button>

          </div>

        </div>

        <div className="hero-image-container">

          <img
            src={call }
            alt="IT professional"
          />

        </div>

      </section>


      {/* CONTACT INFORMATION */}

      <section className="contact-info">

        <div className="info-card">
          <div className="info-icon">☎</div>

          <h3>Phone Support</h3>

          <p>+91 9876543210</p>
          <p>+91 9876543211</p>
        </div>


        <div className="info-card">
          <div className="info-icon">✉</div>

          <h3>Email Address</h3>

          <p>info@vetriitsolutions.com</p>
          <p>support@vetriitsolutions.com</p>
        </div>


        <div className="info-card">
          <div className="info-icon">⌖</div>

          <h3>Office Address</h3>

          <p>Chennai, Tamil Nadu</p>
          <p>India</p>
        </div>


        <div className="info-card">
          <div className="info-icon">◷</div>

          <h3>Working Hours</h3>

          <p>Monday - Saturday</p>
          <p>10:00 AM - 6:00 PM</p>
        </div>

      </section>


      {/* MESSAGE FORM */}

      <section className="message-section">

        <div className="message-box">

          <h2>Send us a message</h2>

          <p className="message-subtitle">
            Fill out the form below and our team will get
            back to you within 24 hours.
          </p>

          <form>

            <div className="form-row">

              <div className="form-group">
                <label>First Name</label>
                <input
                  type="text"
                  placeholder="e.g. Jane"
                />
              </div>

              <div className="form-group">
                <label>Last Name</label>
                <input
                  type="text"
                  placeholder="e.g. Doe"
                />
              </div>

            </div>


            <div className="form-group">

              <label>Email Address</label>

              <input
                className="email-border"
                type="email"
                placeholder="jane@example.com"
              />

            </div>


            <div className="form-group">

              <label>Message</label>

              <textarea
                rows="4"
                placeholder="How can we help you?"
              ></textarea>

            </div>


            <button
              type="submit"
              className="send-button"
            >
              Send Message
            </button>

          </form>

        </div>

      </section>

      {/* WHY CONTACT VETRI */}

<section className="why-contact">

  <h2>Why Contact Vetri?</h2>

  <p className="why-subtitle">
    We provide industry-leading IT solutions and education designed to empower your business and career.
  </p>

  <div className="why-cards">

    <div className="why-card">
      <div className="why-icon">✓</div>

      <h3>100% Free Consultation</h3>

      <p>
        Get expert advice on your project or career path without any upfront cost.
      </p>
    </div>


    <div className="why-card">
      <div className="why-icon">⚡</div>

      <h3>Quick Project Discussion</h3>

      <p>
        Fast-track your ideas with our immediate response and prompt planning sessions.
      </p>
    </div>


    <div className="why-card">
      <div className="why-icon">◎</div>

      <h3>Career Guidance & Internship Support</h3>

      <p>
        Bridge the gap between academics and industry with practical experience.
      </p>
    </div>


    <div className="why-card">
      <div className="why-icon">♧</div>

      <h3>Dedicated Customer Support</h3>

      <p>
        Experience continous, reliable assistance whenever you need it most.
      </p>
    </div>

  </div>

</section>

{/* FAQ SECTION */}

<section className="faq-section">

  <h2>Frequently Asked Questions</h2>

  <div className="faq-container">

    {faqs.map((faq, index) => (

      <div
        className={`faq-item ${
          openFAQ === index ? "faq-open" : ""
        }`}
        key={index}
      >

        <button
          className="faq-question"
          onClick={() =>
            setOpenFAQ(
              openFAQ === index ? null : index
            )
          }
        >

          <span>{faq.question}</span>

          <span className="faq-icon">
            {openFAQ === index ? "−" : "+"}
          </span>

        </button>


        <div
          className={`faq-answer ${
            openFAQ === index ? "show-answer" : ""
          }`}
        >
          <p>{faq.answer}</p>
        </div>

      </div>

    ))}

  </div>

</section>

{/* CTA SECTION */}

<section className="cta-section">

  <div className="cta-content">

    <h2>Ready to Deploy Powerful Solutions?</h2>

    <p>
      Partner with Vetri IT Solutions to integrate
      cutting-edge technology into your business.
      Let's discuss your specific needs and architect the
      solution for your future.
    </p>

    <div className="cta-buttons">

      <button className="cta-primary">
        Schedule a Demo
      </button>

      <button className="cta-secondary">
        Talk to an Expert
      </button>

    </div>

  </div>

</section>

    </div>
  );
}

export default Contact;