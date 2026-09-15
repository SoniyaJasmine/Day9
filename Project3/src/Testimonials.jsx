import React, { useEffect, useState } from "react";
import "./Testimonials.css";

import client1 from "./assets/client1.avif";
import client2 from "./assets/client2.webp";
import client3 from "./assets/client3.avif";
import client4 from "./assets/client4.jpg";

import sbi from "./assets/Construction Website/sbi_home_loan.webp";
import bajaj from "./assets/Construction Website/bajaj.webp";
import basic from "./assets/Construction Website/basic.webp";
import godrej from "./assets/Construction Website/godrej.webp";
import hdfc from "./assets/Construction Website/hdfc_home_loan.webp";
import housing from "./assets/Construction Website/housing.webp";


function Testimonials() {

  // =========================
  // TESTIMONIAL DATA
  // =========================

  const testimonials = [
    {
      quote:
        "Their team handled everything from design to approvals. Professional engineers and smooth execution made the entire process stress-free.",
      name: "Arjun Mehta",
      project: "Commercial Office Space – Hyderabad",
      image: client1,
    },

    {
      quote:
        "The pricing was transparent and there were no hidden charges. The project was completed on time and the finishing quality was excellent.",
      name: "Priya Sharma",
      project: "Villa Construction – Bangalore",
      image: client2,
    },

    {
      quote:
        "The real-time tracking feature was very helpful. We could monitor progress anytime. Highly recommended construction partner.",
      name: "Karthick Iyer",
      project: "Residential construction – Chennai",
      image: client3,
    },
    {
      quote:
        "Their team handled everything from design to approvals. Professional engineers and smooth execution made the entire process stress-free.",
      name: "Arjun Mehta",
      project: "Commercial Office Space – Hyderabad",
      image: client4,
    },
  ];


  // Current testimonial
  const [current, setCurrent] = useState(0);


  // =========================
  // AUTOMATIC TESTIMONIAL
  // =========================

  useEffect(() => {

    const interval = setInterval(() => {

      setCurrent((prev) =>
        (prev + 1) % testimonials.length
      );

    }, 4000);

    return () => clearInterval(interval);

  }, [testimonials.length]);


  // =========================
  // BANK DATA
  // =========================

  const banks = [
    sbi,
    bajaj,
    basic,
    godrej,
    hdfc,
    housing,
  ];


  // Duplicate banks for continuous animation
  const bankList = [...banks, ...banks];


  return (
    <section className="testimonial-section">


      {/* =====================================
          TESTIMONIAL SECTION
      ===================================== */}

      <div className="testimonial-container">

        <h2>What Our Clients Say</h2>

        <p className="testimonial-subtitle">
          Trusted by industry leaders across the construction sector
        </p>


        <div className="testimonial-card">

          <div className="quote-mark">
            66
          </div>


          <div className="stars">
            ★ ★ ★ ★ ★
          </div>


          <p className="testimonial-text">
            “{testimonials[current].quote}”
          </p>


          <div className="client-info">

            <img
              src={testimonials[current].image}
              alt={testimonials[current].name}
              className="client-image"
            />


            <div>

              <h4>
                {testimonials[current].name}
              </h4>

              <p>
                {testimonials[current].project}
              </p>

            </div>

          </div>

        </div>


        {/* =========================
            AUTOMATIC DOTS
        ========================= */}

        <div className="slider-controls">

          <button className="arrow">
            ‹
          </button>


          <div className="dots">

            {testimonials.map((_, index) => (

              <span
                key={index}
                className={
                  current === index
                    ? "active-dot"
                    : ""
                }
              ></span>

            ))}

          </div>


          <button className="arrow">
            ›
          </button>

        </div>


        {/* =========================
            STATISTICS
        ========================= */}

        <div className="statistics">

          <div className="stat">
            <h3>500+</h3>
            <p>Happy Clients</p>
          </div>


          <div className="stat">
            <h3>1,200+</h3>
            <p>Projects Completed</p>
          </div>


          <div className="stat">
            <h3>98.5%</h3>
            <p>Satisfaction Rate</p>
          </div>


          <div className="stat">
            <h3>24/7</h3>
            <p>Support Available</p>
          </div>

        </div>

      </div>


      {/* =====================================
          BANKING PARTNERS
      ===================================== */}

      <div className="banking-section">

        <h2>Our Banking Partners</h2>

        <p className="banking-subtitle">
          Helping customers get easy access to home construction loans
        </p>


        <div className="bank-slider">

          <div className="bank-track">

            {bankList.map((bank, index) => (

              <div
                className="bank-card"
                key={index}
              >

                <img
                  src={bank}
                  alt="Banking Partner"
                />

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}

export default Testimonials;