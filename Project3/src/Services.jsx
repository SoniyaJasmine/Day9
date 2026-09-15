import React from "react";
import { useNavigate } from "react-router-dom";
import "./Services.css"

import c2 from "./assets/c2.png";
import c3 from "./assets/c3.png";
import c4 from "./assets/c4.png";
import c5 from "./assets/c5.png";
import c6 from "./assets/c6.png";

function ServiceImage({ image, title }) {
  return (
    <div className="service-image-box">
      <img src={image} alt={title} />

      <div className="image-overlay"></div>
        <div className="overlay-border">
          <div className="overlay-content">
            
          </div>
        </div>
    </div>
  );
}

function Services(){

    const navigate = useNavigate();

    const services = [
    {
      title: "Commercial Construction",
      subtitle: "Smart Infrastructure for Growing Businesses",
      text: "From office buildings to retail spaces and warehouses, we construct durable and secure commercial structures.",
      image: c2,
      list: [
        "Office complexes",
        "Retail & showroom spaces",
        "Industrial buildings",
        "Structural steel construction",
        "Compliance & safety approvals",
        "Project timeline management",
      ],
      button: "Discuss Your Project",
      reverse: true,
    },

    {
      title: "Maintenance Services",
      subtitle: "Protecting Your Investment",
      text: "We provide ongoing maintenance solutions to keep your property safe, functional, and efficient.",
      image: c3,
      list: [
        "Electrical & plumbing repairs",
        "Structural inspections",
        "Waterproofing solutions",
        "Annual Maintenance Contracts (AMC)",
        "Emergency repair support",
      ],
      button: "Request Maintenance",
      reverse: false,
    },

    {
      title: "Interior Planning & Designing",
      subtitle: "Designed for Comfort & Functionality",
      text: "Our interior experts transform empty spaces into beautiful, functional environments tailored to your lifestyle or business needs.",
      image: c4,
      list: [
        "3D interior visualization",
        "Modular kitchen & wardrobe design",
        "False ceiling & lighting design",
        "Space optimization planning",
        "Material & finish selection",
      ],
      button: "Start Designing",
      reverse: true,
    },

    {
      title: "Renovation & Remodeling",
      subtitle: "Revive, Redesign, Reimagine",
      text: "Upgrade your existing property with modern layouts, structural enhancements, and fresh aesthetics.",
      image: c5,
      list: [
        "Structural strengthening",
        "Layout modifications",
        "Exterior facade upgrade",
        "Interior remodeling",
        "Budget-friendly renovation plans",
      ],
      button: "Explore Renovation",
      reverse: false,
    },
    {
      title: "Architectural Plans & Approvals",
      subtitle: "Precision Planning for Perfect Execution",
      text: "Our architects create detailed technical drawings and handle required approvals to ensure smooth project execution.",
      image: c6,
      list: [
        "Architectural blueprints",
        "Structural drawings",
        "3D elevation designs",
        "Vastu planning (optional)",
        "Government approvals & documentation",
      ],
      button: "Get Architectural Plan",
      reverse: true,
    },
  ];

return (
    <div>
        <div className="services-hero">
            <div className="services-overlay">
                <h1>Building Excellence Across Every Project</h1>

                <p>
                    At BluePeak Infra & Constructions, we provide end-to-end construction solutions - from planning and design to execution and handover. Our structured process, expert team, and strict quality standarts ensure reliable and lasting results.
                </p>
        </div>
      </div>

      <h2 className="our-project">Our Projects</h2>

    <section className="services-section">
        

      {services.map((service, index) => (
        <div
          className={`service-row ${service.reverse ? "reverse" : ""}`}
          key={index}
        >

          {/* IMAGE */}
          <ServiceImage
            image={service.image}
            title={service.title}
          />

          {/* CONTENT */}
          <div className="service-content">

            <h2>{service.title}</h2>

            <h4>{service.subtitle}</h4>

            <p>{service.text}</p>

            <h5>What We Offer:</h5>

            <ul>
              {service.list.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>

            <div className="service-border">
                    <div className="book-btn-border">
                      <button className="book-btn" 
                              onClick={() => {
                                navigate("/contact");
                                setTimeout(() => {
                                    window.scrollTo(0,0);
                                }, 0);
                        
                      }}>
                        {service.button}</button>
                      <span>›</span>
                    </div>
                  </div>

          </div>

        </div>
      ))}

    </section>


        <section className="cta">

            <div className="cta-overlay"></div>

            <div className="cta-content project">

                <h2>Ready to Build with Confidence?</h2>

                <p>Partner with BluePeak Infra & Constructions and experience structured planning, quality execution, and timely delivery. </p>

                    <div className="project-align">
                        <div className="white-border">
                            <div className="book-btn-border">
                                <button className="book-btn">Book Free Consultation</button>
                                <span>›</span>
                            </div>
                        </div>
                    </div>

                    <div className="verify-info">
                        <ul>
                            <li>ISO Certified</li>
                            <li>Quality Assured</li>
                            <li>Trusted Partner</li>
                        </ul>
                    </div>

            </div>
        </section> 
    </div>
);
}

export default Services;