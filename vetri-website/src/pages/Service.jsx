import "./Service.css";

import pic1 from "../assets/images/Main.png";
import pic2 from "../assets/images/Margin.png";
import pic3 from "../assets/images/About us.png";
import pic4 from "../assets/images/Background+Border.png";
import pic5 from "../assets/images/Background+Border+Shadow+OverlayBlur.png";
import pic6 from "../assets/images/Background-1.png";

const services = [
  {
    image: pic1,
    icon: "</>",
    title: "Website Development",
    description:
      "Custom, scalable, and secure web applications tailored to your business needs, built with modern frontend and backend technologies. ",
    points: [
      "React & Vue.js Frontends",
      "Scalable Node.js Backends",
      "Secure Cloud Architectures",
      "Progressive Web Apps (PWA)",
    ],
  },
  {
    image: pic2,
    icon: "▯",
    title: "Mobile App Development",
    description:
      "High-performance iOS and Android applications utilizing both native approaches and modern cross-platform frameworks.",
    points: [
      "Native iOS & Android Apps",
      "Cross-platform Flutter Apps",
      "High Performance Inteface",
      "Seamless API Integrations",
    ],
  },
  {
    image: pic3,
    icon: "</>",
    title: "Software Solutions",
    description:
      "Robust enterprise software architecture designed for operational efficiency, automation, and long-term business scale.",
    points: [
      "Custom ERP & CRM Solutions",
      "Business Process Automation",
      "Legacy System Modernization",
      "Secure Enterprise Platforms",
    ],
  },
  {
    image: pic4,
    icon: "☁",
    title: "Cloud & DevOps",
    description:
      "Seamless cloud integration, migration strategies, and automated deployment pipelines for a modern, resilient infrastructure.",
    points: [
      "AWS, Azure & GCP Migration",
      "CI/CD Pipeline Automation",
      "Kubernetes Orchestration",
      "24/7 Monitoring & Support",
    ],
  },
  {
    image: pic5,
    icon: "✧",
    title: "UI/UX Design",
    description:
      "Engaging and intuitive digital experiences centered around user behaviour, accessibility, and cutting-edge aesthetics.",
    points: [
      "User Research & Journey Mapping",
      "Wireframes & Prototypes",
      "High-Fidelity UI Designs",
      "Usability Testing & Iteration",
    ],
  },
  {
    image: pic6,
    icon: "⌁",
    title: "Digital Marketing & SEO",
    description:
      "Data-driven strategies designed to increase search visibility, drive organic growth, and maximize your return on investment.",
    points: [
      "Search Engine Optimization",
      "Pay-Per-Click Campaigns",
      "Social Media Strategy",
      "Conversion Rate Optimization",
    ],
  },
];


const technologyGroups = [
  {
    title: "Frontend Technologies",
    technologies: [
      { icon: "</>", name: "React.js" },
      { icon: "<>", name: "Vue.js" },
      { icon: "▣", name: "Next.js" },
      { icon: "▤", name: "TypeScript" },
      { icon: "◇", name: "Tailwind CSS" },
    ],
  },
  {
    title: "Backend & Database",
    technologies: [
      { icon: "▤", name: "Node.js" },
      { icon: ">_", name: "Python" },
      { icon: "▤", name: "PostgreSQL" },
      { icon: "▤", name: "MySQL" },
      { icon: "⬡", name: "MongoDB" },
    ],
  },
  {
    title: "Cloud & Mobile",
    technologies: [
      { icon: "☁", name: "AWS" },
      { icon: "☁", name: "Azure" },
      { icon: "▯", name: "Flutter" },
      { icon: "▯", name: "React Native" },
      { icon: "▱", name: "Docker" },
    ],
  },
];


const Service = () => {
  return (

    <div className="service">

        <section className="about-hero">
            <div className="about-content">
                <h1>Our Premium Services</h1>
                <p>End-to-end technology solutions designed to accelerate your business growth, optimize operations, and drive successful digital transformation.</p>
            </div>
        </section>

    <section className="service-grid-section">

      <div className="service-grid">
        {services.map((service, index) => (
          <div className="service-grid-card" key={index}>

            <div className="service-grid-image">
              <img
                src={service.image}
                alt={service.title}
              />
            </div>

            <div className="service-grid-title">
              <div className="service-grid-icon">
                {service.icon}
              </div>

              <h3>{service.title}</h3>
            </div>

            <p className="service-grid-description">
              {service.description}
            </p>

            <ul className="service-grid-points">
              {service.points.map((point, pointIndex) => (
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


<section className="technologies-section">

      {/* Heading */}
      <div className="technologies-header">
        <h2>Technologies We Master</h2>

        <p>
          We leverage modern frameworks and reliable platforms to build
          scalable, high-performing digital solutions.
        </p>
      </div>

      {/* Technology Groups */}
      <div className="technology-groups">

        {technologyGroups.map((group, index) => (
          <div className="technology-group" key={index}>

            <h3>{group.title}</h3>

            <div className="technology-grid">

              {group.technologies.map((technology, techIndex) => (
                <div
                  className="technology-card"
                  key={techIndex}
                >
                  <div className="technology-icon">
                    {technology.icon}
                  </div>

                  <span>{technology.name}</span>
                </div>
              ))}

            </div>

          </div>
        ))}

      </div>

    </section>

        <section className="cta-section">

        <div className="cta-content">

            <h2>Ready to Transform Your Business?</h2>

            <p>
            Partner with Vetri IT Solutions to build
            innovative, scalable and secure digital products. Let's discuss your project and discover how we can help you achieve your goals today.
            </p>

            <div className="cta-buttons">

            <button className="cta-primary">
                Get Free Consultation
            </button>

            <button className="cta-secondary">
                Contact Our Expert
            </button>

            </div>

        </div>

        </section>
    </div>
  );
};

export default Service;