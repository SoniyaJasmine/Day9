import "./Solution.css"

import image1 from "../assets/images/ADMIN PAGE.png";
import image2 from "../assets/images/HM.png";
import image3 from "../assets/images/Frame 611.jpg";
import image4 from "../assets/images/Login.jpg";
import image5 from "../assets/images/Main.png";
import image6 from "../assets/images/c8a59a96-8a15-4867-b48a-c26409cd2b4d.jpg.png";



const Solution = () => {

const projects = [
  {
    image: image1,
    icon: "▦",
    title: "School Management",
    description:
      "Centralized your business operations with comprehensive ERP solutions integrating finance, HR, manufacturing, and supply chain.",
    points: [
      "Dedicated Trust Management",
      "Automated Reporting & Insights",
      "Real-time Resource Planning",
      "Scalable Cloud Architecture",
    ],
  },
  {
    image: image2,
    icon: "🛒",
    title: "E-Commerce Platform",
    description:
      "Scalable and secure B2B/B2C e-commerce platforms designed for high conversion rates and seamless digital shopping experiences.",
    points: [
      "Custom Responsive Storefronts",
      "Secure Payment Gateways",
      "Omnichannel Inventory Control",
      "AI-Driven Product Recommendations",
    ],
  },
  {
    image: image3,
    icon: "♧",
    title: "PET SHOP",
    description:
      "Build stronger customer relationships and automate complex store operations with our comprehensive solutions.",
    points: [
      "Sales Pipeline Tracking",
      "Marketing Campaign Automation",
      "Customer Support Portals",
      "Seamless 3rd Party Integrations",
    ],
  },
  {
    image: image4,
    icon: "♧",
    title: "Yoga app",
    description:
      "Leverage artificial intelligence to gain predictive insights, automate complex tasks, and create highly personalized user experiences.",
    points: [
      "Predictive Data Analytics",
      "Natural Language Processing",
      "Intelligent Chatbots & Assistants",
      "Custom AI Model Training",
    ],
  },
  {
    image: image5,
    icon: "▥",
    title: "Car Resale",
    description:
      "Transform raw complex data into actionable business insights with our powerful business intelligence dashboards and tools.",
    points: [
      "Interactive Visual Dashboards",
      "Secure Data Warehousing",
      "Customer Recommendation",
      "Advanced Business Reporting",
    ],
  },
  {
    image: image6,
    icon: "⬡",
    title: "Supply Chain Solutions",
    description:
      "Optimize logistics operations, track digital inventory in real-time, and improve supplier collaboration with our smart SCM software.",
    points: [
      "Real-time Fleet Tracking",
      "Multi-vendor Management",
      "AI Demand Forecasting",
      "Intelligent Route Optimization",
    ],
  },
];

  return (

    <div className="solution">

        <section className="about-hero">
            <div className="about-content">
                <h1>Enterprise-Grade Solutions</h1>
                <p>Pre-built and custom software platforms designed to streamline operations, enhance customer experiences, and drive digital transformation across your organization.</p>
            </div>
        </section>


        <section className="solution-section">

      <div className="solution-grid">
        {projects.map((project, index) => (
          <div className="solution-card" key={index}>

            {/* Project Image */}
            <div className="solution-image">
              <img
                src={project.image}
                alt={project.title}
              />
            </div>

            {/* Icon + Title */}
            <div className="solution-title-row">
              <div className="solution-icon">
                {project.icon}
              </div>

              <h3>{project.title}</h3>
            </div>

            {/* Description */}
            <p className="solution-description">
              {project.description}
            </p>

            {/* Features */}
            <ul className="solution-points">
              {project.points.map((point, pointIndex) => (
                <li key={pointIndex}>
                  <span>✓</span>
                  {point}
                </li>
              ))}
            </ul>

          </div>
        ))}
      </div>

    </section>




        <section className="cta-section">

        <div className="cta-content">

            <h2>Ready to Deploy Powerful Business?</h2>

            <p>
            Partner with Vetri IT Solutions to integrate cutting-edge technology into your business. Let's discuss your specific needs and architect a solution for your future.</p>

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
};

export default Solution ;