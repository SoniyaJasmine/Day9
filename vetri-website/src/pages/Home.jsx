
import React, { useEffect, useState } from "react";
import "./Home.css";

import home from "../assets/images/ChatGPT Image Apr 10, 2026, 12_56_51 PM.png";
import tech from "../assets/images/About us.png";
import slide1 from "../assets/images/ChatGPT Image Apr 10, 2026, 01_02_14 PM.png";
import slide2 from "../assets/images/ChatGPT Image Apr 10, 2026, 01_02_20 PM.png";
import slide3 from "../assets/images/ChatGPT Image Apr 10, 2026, 01_02_30 PM.png";
import slide4 from "../assets/images/ChatGPT Image Apr 10, 2026, 01_02_57 PM.png";
import case1 from "../assets/images/ADMIN PAGE.png";
import case2 from "../assets/images/Margin.png";
import case3 from "../assets/images/c8a59a96-8a15-4867-b48a-c26409cd2b4d.jpg.png";



const MapPinIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
    <circle cx="12" cy="10" r="3"></circle>
  </svg>
);

const PhoneIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
  </svg>
);

const MailIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
    <polyline points="22,6 12,13 2,6"></polyline>
  </svg>
);

const ClockIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <polyline points="12 6 12 12 16 14"></polyline>
  </svg>
);
const testimonials = [
  {
    id: 1,
    quote: "Vetri IT Solutions completely transformed our business operations with their outstanding custom software. Highly recommended!",
    name: "Sarah Jenkins",
    role: "CFO, TechGrowth",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150"
  },
  {
    id: 2,
    quote: "Vetri IT Solutions completely transformed our business operations with their outstanding custom software. Highly recommended!",
    name: "Marcus Reynolds",
    role: "Founder, RetailFast",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150"
  },
  {
    id: 3,
    quote: "Their cloud integration strategy saved us thousands of dollars and made our infrastructure incredibly resilient.",
    name: "Elena Wong",
    role: "Founder, RetailFast",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=150"
  }
];

const Home = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Software Development',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent successfully!');
  };

  const [visibleCount, setVisibleCount] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleCount((prev) => {
        if (prev === processImages.length) {
          return 1;
        }

        return prev + 1;
      });
    }, 2500);

    return () => clearInterval(timer);
  }, []);

const stats = [
    {
      number: "250+",
      label: "Projects Completed",
    },
    {
      number: "120+",
      label: "Happy Clients",
    },
    {
      number: "10+",
      label: "Years Experience",
    },
    {
      number: "24/7",
      label: "Technical Support",
    },
  ];

  

  const premium = [
    {
      icon: "▣",
      title: "Website Development",
      description:
        "Custom, scalable, and user-friendly websites designed to help your business grow.",
    },
    {
      icon: "▯",
      title: "Mobile App Development",
      description:
        "High-performance iOS and Android applications with modern and cross-platform technologies.",
    },
    {
      icon: "</>",
      title: "Software Solutions",
      description:
        "Robust and customized software solutions designed to improve your business efficiency.",
    },
    {
      icon: "☁",
      title: "Cloud & DevOps",
      description:
        "Seamless cloud infrastructure and automated deployment solutions for your applications.",
    },
    {
      icon: "✥",
      title: "UI/UX Design",
      description:
        "Engaging and intuitive digital experiences designed around your users.",
    },
    {
      icon: "⌁",
      title: "Digital Marketing & SEO",
      description:
        "Data-driven strategies to increase your online visibility and grow your business.",
    },
  ];

  const features = [
    {
      icon: "✓",
      title: "Experienced Team",
    },
    {
      icon: "✓",
      title: "Custom Solutions",
    },
    {
      icon: "✓",
      title: "On-Time Delivery",
    },
    {
      icon: "✓",
      title: "Affordable Pricing",
    },
  ];

  const solutions = [
  {
    icon: "▤",
    title: "ERP Management System",
    description:
      "Streamline your business operations with our comprehensive ERP solutions designed for efficiency and growth.",
  },
  {
    icon: "🛒",
    title: "E-Commerce Platform",
    description:
      "Scalable online retail solutions with advanced features for seamless shopping experiences.",
  },
  {
    icon: "♙",
    title: "CRM & Automation",
    description:
      "Enhance customer relationships and automate workflows with our powerful CRM solutions.",
  },
];

const processImages = [
  slide1,
  slide2,
  slide3,
  slide4,
];

const caseStudies = [
  {
    image: case1,
    category: "Education",
    title: "Student Dashboard",
  },
  {
    image: case2,
    category: "Retail",
    title: "Global E-Commerce App",
  },
  {
    image: case3,
    category: "Healthcare",
    title: "Patient Management CRM",
  },
];

  return (
    <div className="home">

    <section className="hero">
      <div className="hero-content">
        <div className="heading-wrapper">
        <h1 className="hero-heading">
          Transforming
          <br />
          Businesses Through
          <br />
          <span>Smart Digital</span>
          <br />
          <span>Solutions</span>
        </h1>
        </div>
        <p className="hero-description">
          Vetri IT Solutions delivers innovative web, mobile, software, cloud, and AI-powered solutions for modern businesses.
        </p>

        <div className="hero-buttons">
          <button className="primary-btn">
            Get Free Consultation
          </button>

          <button className="secondary-btn">
            View Services
          </button>
        </div>

      </div>

      <div className="hero-image">
        <img
          src={home}
          alt="Digital Solutions"
        />
      </div>
    </section>

    <section className="stats-section">
      <div className="stats-container">
        {stats.map((stat, index) => (
          <div className="stat-card" key={index}>
            <h3>{stat.number}</h3>
            <p>{stat.label}</p>
          </div>
        ))}
      </div>
    </section>

    <section className="premium-section">

      <div className="premium-header">
        <h2>Our Premium Services</h2>

        <p>
          Comprehensive digital solutions tailored to elevate your business
          operations and user experience.
        </p>
      </div>

      <div className="premium-grid">
        {premium.map((premi, index) => (
          <div className="premium-card" key={index}>

            <div className="premium-icon">
              {premi.icon}
            </div>

            <h3>{premi.title}</h3>

            <p>{premi.description}</p>

          </div>
        ))}
      </div>

    </section>

    <section className="technology-section">

      {/* IMAGE */}
      <div className="technology-image-wrapper">
        <img
          src={tech}
          alt="Technology Partner"
          className="technology-image"
        />
      </div>

      {/* CONTENT */}
      <div className="technology-content">

        <h2>
          Your Trusted Technology Partner
        </h2>

        <p className="technology-description">
          We help startups and enterprises grow by providing innovative, scalable, and reliable technology solutions that drive business success.
          Our mission is to bridge the gap between complex challenges and elegant digital solutions.
        </p>

        <div className="technology-features">

          {features.map((feature, index) => (
            <div className="technology-feature" key={index}>

              <div className="techno-icon">
                {feature.icon}
              </div> 
              <h3>{feature.title}</h3>
            </div>
          ))}

        </div>
      </div>

    </section>

    <section className="featured-solutions">

      <div className="featured-solutions-heading">
        <h2>Featured Solutions</h2>

        <p>
          Pre-built and customizable platforms to accelerate your digital
          transformation journey.
        </p>
      </div>

      <div className="feature-grid">
        {solutions.map((solution, index) => (
          <div className="feature-card" key={index}>

            <div className="feature-icon">
              {solution.icon}
            </div>

            <h3>{solution.title}</h3>

            <p>{solution.description}</p>

            <button className="feature-link">
              Learn More <span>→</span>
            </button>

          </div>
        ))}
      </div>

    </section>

    <section className="proven-process">

      <div className="process-heading">
        <h2>Our Proven Process</h2>

        <p>
          A systematic approach to delivering high-quality digital products on time.
        </p>
      </div>

      <div className="process-images">
        {processImages.map((image, index) => (
          <div
            className={`process-image ${
              index < visibleCount ? "show" : ""
            }`}
            key={index}
          >
            <img
              src={image}
              alt={`Process Step ${index + 1}`}
            />
          </div>
        ))}
      </div>

    </section>

    <section className="case-studies">

      <div className="case-studies-heading">
        <h2>Featured Case Studies</h2>

        <p>
          Explore how we have helped businesses achieve their goals
          through technology.
        </p>
      </div>

      <div className="case-studies-grid">

        {caseStudies.map((study, index) => (
          <div className="case-study-card" key={index}>

            {/* IMAGE */}

            <div className="case-study-image">
              <img
                src={study.image}
                alt={study.title}
              />
            </div>

            {/* CONTENT */}

            <div className="case-study-content">

              <span className="case-study-category">
                {study.category}
              </span>

              <h3>{study.title}</h3>

              <p>{study.description}</p>

              <button className="case-study-button">
                View Case Study
                <span>→</span>
              </button>

            </div>

          </div>
        ))}

      </div>

    </section>
    <div className="page-container">
      {/* Testimonials Section */}
      <section className="testimonials-section">
        <h2 className="title-animated">What Our Clients Say</h2>
        <p className="subtitle">Real feedback from businesses that have partnered with Vetri IT Solutions.</p>

        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <div className={`testimonial-card slide-up-anim-${i + 1}`} key={t.id}>
              <p className="testimonial-quote">"{t.quote}"</p>
              <div className="testimonial-author">
                <img src={t.avatar} alt={t.name} className="author-img" />
                <div>
                  <h4 className="author-name">{t.name}</h4>
                  <p className="author-role">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Main Section: Form & Info */}
      <section className="contact-section">
        {/* Left Card: Contact Form */}
        <div className="form-card fade-in-left">
          <h3 className="form-title">Get in Touch</h3>
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                name="name"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="john@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Phone Number</label>
              <input
                type="tel"
                name="phone"
                placeholder="+1 (555) 000-0000"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Service Required</label>
              <select name="service" value={formData.service} onChange={handleChange}>
                <option value="Software Development">Software Development</option>
                <option value="Cloud Integration">Cloud Integration</option>
                <option value="UI/UX Design">UI/UX Design</option>
                <option value="IT Consulting">IT Consulting</option>
              </select>
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea
                name="message"
                rows="4"
                placeholder="Tell us about your project..."
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>

        {/* Right Column: Contact Details & Image */}
        <div className="info-column fade-in-right">
          <h3 className="info-title">Contact Information</h3>

          <div className="info-list">
            <div className="info-item">
              <div className="icon-wrapper"><MapPinIcon /></div>
              <div>
                <strong>Office Address</strong>
                <p>123 Innovation Boulevard, Tech District, NY 10001</p>
              </div>
            </div>

            <div className="info-item">
              <div className="icon-wrapper"><PhoneIcon /></div>
              <div>
                <strong>Phone Number</strong>
                <p>+1 (800) 123-4567</p>
              </div>
            </div>

            <div className="info-item">
              <div className="icon-wrapper"><MailIcon /></div>
              <div>
                <strong>Email Address</strong>
                <p>hello@vetri-it.com</p>
              </div>
            </div>

            <div className="info-item">
              <div className="icon-wrapper"><ClockIcon /></div>
              <div>
                <strong>Business Hours</strong>
                <p>Mon - Fri: 9:00 AM - 6:00 PM</p>
              </div>
            </div>
          </div>

          <div className="image-container">
            <img
              src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800"
              alt="Tech Innovation Map"
            />
          </div>
        </div>
      </section>

      </div>

    </div>
  );
};

export default Home;