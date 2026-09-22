import "./About.css";
import tech from "../assets/images/Background+Border+Shadow+OverlayBlur.png";
import image1 from "../assets/images/Background.png";
import image2 from "../assets/images/image 9.png";
import image3 from "../assets/images/Background.png";
import image4 from "../assets/images/image 9.png";

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

  const industries = [
  {
    icon: "⌁",
    title: "Healthcare",
    description:
      "Secure telemedicine platforms, electronic health records (EHR) integration, and patient management systems built for compliance.",
  },
  {
    icon: "◷",
    title: "Finance & Banking",
    description:
      "Advanced fintech applications, secure payment gateways, blockchain integration, and fraud detention software.",
  },
  {
    icon: "▣",
    title: "Retail & E-Commerce",
    description:
      "Omnichannel retail platforms, dynamic POS systems, and intellignet inventory management solutions for modern brands.",
  },
  {
    icon: "♧",
    title: "Manufacturing",
    description:
      "Industry 4.0 solutions, production line automation, and predictive maintenance dashboards for smart factories.",
  },
  {
    icon: "▰",
    title: "Education",
    description:
      "Interactive E-learning platforms, comprehensive campus management systems, and virtual classrom technologies.",
  },
  {
    icon: "▥",
    title: "Logistics & Supply",
    description:
      "Real-time fleet tracking, dynamic route optimization, and automated warehouse management software.",
  },
];

const leaders = [
  {
    image: image1,
    name: "Rajesh Vetri",
    role: "Founder & CEO",
  },
  {
    image: image2,
    name: "Priya Sharma",
    role: "Chief Technology Officer",
  },
  {
    image: image3,
    name: "Anil Kumar",
    role: "Chief Operations Officer",
  },
  {
    image: image4,
    name: "Sarah Jenkins",
    role: "Head of Design",
  },
];


const About = () => {

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

  return (

    <div className="about">

        <section className="about-hero">
            <div className="about-content">
                <h1>About Vetri IT Solutions</h1>
                <p>We are a team of passionate technologists dedicated to driving innovation and empowering businesses through cutting-edge solutions.</p>
            </div>
        </section>

        <section className="technology-section tech-background">
        
              {/* IMAGE */}
            <div className="technology-image-wrapper tech-about">
                <img
                  src={tech}
                  alt="Technology Partner"
                  className="technology-image tech-image"
                />
            </div>
        
              {/* CONTENT */}
            <div className="technology-content">
        
                <h2>
                  Your Trusted Technology Partner
                </h2>
        
                <p className="technology-description">
                  Founded with a vision to revolutionize the digital landscape, Vetri IT Solutions has been at the forefront of technological innovation. We
                  help startups and enterprises accelerate their growth by delivering scalable, secure, and user-centric web, mobile, and software solutions.
                </p>

                <p className="technology-description">
                    Our Commitment to excellence, transparent communication, and agile methodologies ensures that every project
                    we undertake is executed flawlesssly, on time, and within budget.
                </p>
        
                <div className="technology-features">
        
                  {features.map((feature, index) => (
                    <div className="technology-feature tech-outline" key={index}>
        
                      <div className="techno-icon">
                        {feature.icon}
                      </div> 
                      <h3>{feature.title}</h3>
                    </div>
                  ))}
        
                </div>
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

        <section className="about-section">

        <div className="mission-vision">

            <div className="mission-card">
                <div className="mission-icon">◎</div>

                <h2>Our Mission</h2>

                <p>
                    To empower businesses globally by delivering innovative,
                    high-quality, and user-friendly technology solutions that
                    enhance efficiency, optimize operations, and drive
                    sustainable growth in a rapidly evolving digital world.
                </p>
            </div>

            <div className="mission-card">
                <div className="mission-icon">⌁</div>

                <h2>Our Vision</h2>

                <p>
                    To be the globally recognized leading technology partner
                    of choice, known for our unwavering commitment to quality,
                    transformative digital products, and exceeding long-term
                    value for our clients and communities.
                </p>
            </div>

        </div>

        <div className="industries-section">

            <div className="industries-heading">
                <h2>Industries We Transform</h2>

                <p>
                    Our scalable digital solutions are tailored to meet the
                    unique operational challenges and strict compliance
                    requirements of diverse industries.
                </p>
            </div>

            <div className="industries-grid">

                {industries.map((industry, index) => (
                <div className="industry-card" key={index}>

                    <div className="industry-icon">
                        {industry.icon}
                    </div>

                    <h3>{industry.title}</h3>

                    <p>{industry.description}</p>

                </div>
                ))}

            </div>

        </div>

        <div className="leadership-section">

            <div className="industries-heading">
            <h2>Meet Our Leadership</h2>

            <p>
                The visionaries and technology experts guiding our
                organization towards excellence.
            </p>
            </div>

            <div className="leadership-grid">

                {leaders.map((leader, index) => (
                    <div className="leader-card" key={index}>

                        <div className="leader-image">
                            <img
                            src={leader.image}
                            alt={leader.name}
                            />
                        </div>

                        <h3>{leader.name}</h3>

                        <p>{leader.role}</p>

                    </div>
                ))}

            </div>

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

export default About;


