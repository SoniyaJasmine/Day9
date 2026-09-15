import WhyChooseUs from "./WhyChooseUs";
import HowItWorks from "./HowItWorks";
import Testimonials from "./Testimonials";


function Home() {
    
    return (
        <>
            <section className="hero">
              <div className="hero-content">
                <div className="hero-text">
                  <h1>Build Your Future with <span>Confidence</span></h1>
                  <p>Premium construction materials with guaranteed quality checks, price protection, and 24/7 project tracking.</p>
                </div>
                <div className="consultation-card">
                  <h2>Talk to Our Expert</h2>
                  <input type="text" name="" id="" placeholder="Name" />
                  <div className="phone-input">
                    <span>+91 </span>
                    <input type="text" name="" id="" placeholder="Phone Number" />
                  </div>
                  <label htmlFor="">Project Type</label>
                  <select name="" id="">
                    <option value="" className="option">Residential</option>
                    <option value="" className="option">Commercial</option>
                    <option value="" className="option">Renovation</option>
                    <option value="" className="option">Interioe</option>
                  </select>
                  <label htmlFor="">Location</label>
                  <select name="" id="">
                    <option value="" className="option">Chennai</option>
                    <option value="" className="option">Bangalore</option>
                    <option value="" className="option">Hyderabad</option>
                    <option value="" className="option">Mumbai</option>
                    <option value="" className="option">Delhi NCR</option> 
                    <option value="" className="option">Other Cities</option>
                  </select>
                  <div className="white-border">
                    <div className="book-btn-border">
                      <button className="book-btn">Book Free Consultation </button>
                      <span>›</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <div className="floating-button">
              <img src="src/assets/Construction Website/pngtree-chatbot-symbol-3d-icon-isolated-on-a-transparent-background-symbolizing-ai-png-image_15359544.png" alt="" />
            </div>

            <section className="services">
          <h2>Our Services</h2>
          <div className="services-container">

            <div className="service-card">
              <div className="service-image">
                <img src="src/assets/Construction Website/c1.png" alt="" />
                <div className="top-left"></div>
                <div className="bottom-right"></div>

                  <div className="overlay">
                    <div className="white-border">
                      <div className="book-btn-border">
                        <button className="book-btn">View Details</button>
                        <span>›</span>
                      </div>
                    </div>
                  </div>

              </div>
              <h3>Residential Construction</h3>
              <p>Custom-built homes with quality materials and timely delivery.</p>
            </div>

            <div className="service-card">
              <div className="service-image">
                <img src="src/assets/Construction Website/c2.png" alt="" />
                <div className="top-left"></div>
                <div className="bottom-right"></div>

                <div className="overlay">
                    <div className="white-border">
                      <div className="book-btn-border">
                        <button className="book-btn">View Details</button>
                        <span>›</span>
                      </div>
                    </div>
                </div>

              </div>
              <h3>Commercial Construction</h3>
              <p>Modern and durable spaces designed for business growth.</p>
            </div>
            <div className="service-card">
              <div className="service-image">
                <img src="src/assets/Construction Website/c3.png" alt="" />
                <div className="top-left"></div>
                <div className="bottom-right"></div>
                <div className="overlay">
                    <div className="white-border">
                      <div className="book-btn-border">
                        <button className="book-btn">View Details</button>
                        <span>›</span>
                      </div>
                    </div>
                  </div>
              </div>
              <h3>Maintenance Services</h3>
              <p>Complete repair and upkeep solutions for your property.</p>
            </div>
            <div className="service-card">
              <div className="service-image">
                <img src="src/assets/Construction Website/c4.png" alt="" />
                <div className="top-left"></div>
                  <div className="bottom-right"></div>
                <div className="overlay">
                    <div className="white-border">
                      <div className="book-btn-border">
                        <button className="book-btn">View Details</button>
                        <span>›</span>
                      </div>
                    </div>
                  </div>
              </div>
              <h3>Interior Planning & Designing</h3>
              <p>Smart, stylish interiors tailored to your lifestyle.</p>
            </div>
            <div className="service-card">
              <div className="service-image">
                <img src="src/assets/Construction Website/c5.png" alt="" />
                <div className="top-left"></div>
                  <div className="bottom-right"></div>
                <div className="overlay">
                    <div className="white-border">
                      <div className="book-btn-border">
                        <button className="book-btn">View Details</button>
                        <span>›</span>
                      </div>
                    </div>
                  </div>
              </div>
              <h3>Renovatiion & remodeling</h3>
              <p>Upgrade old spaces into modern, functional designs.</p>
            </div>
            <div className="service-card">
              <div className="service-image">
                <img src="src/assets/Construction Website/c6.png" alt="" />
                <div className="top-left"></div>
                  <div className="bottom-right"></div>
                <div className="overlay">
                    <div className="white-border">
                      <div className="book-btn-border">
                        <button className="book-btn">View Details</button>
                        <span>›</span>
                      </div>
                    </div>
                  </div>
              </div>
              <h3>Architectural Plans</h3>
              <p>Accurate blueprints and approval-ready designs.</p>
            </div>
          </div>
        </section>

        <section className="trusted">
            <div className="trusted-img">
              <img src="src/assets/Construction Website/11320141.png" alt="" />
            </div>
            <div className="trusted-content">
              <h3>Trusted by 500+ Happy Clients Across India</h3>
              <p>From independent homes to large commercial projects, we have successfully delivered spaces that stand strong and inspire confidence.</p>
            </div>
        </section>

        <WhyChooseUs />

        <section className="vr-section">

          <div className="vr-content">

            <h2>Experience Your Project in Virtual Reality</h2>

            <p>
              Walk through your construction project before it is built.
              Our VR technology lets you visualize every detail, make changes
              in real-time, and gives you everything you need before construction begins.
            </p>
          
            <div className="vr-points">
              <span>✓ Immersive 3D visualization</span>
              <span>✓ Real-time modifications</span>
              <span>✓ 360° walkthrough</span>
              <span>✓ 360° viewing experience</span>
            </div>

            <div className="white-border">
              <div className="book-btn-border">
                <button className="book-btn">Book Free Consultation </button>
                <span>›</span>
              </div>
            </div>

          </div>

          <div className="vr-image-container">

            <img
              src="src/assets/Construction Website/ChatGPT Image Mar 2, 2026, 02_01_01 PM.png"
              alt="Virtual Reality Construction"
              className="vr-image"
            />

            <div className="vr-badge">
              <small>Satisfaction rate</small>
              <strong>98%</strong>
            </div>

            <div className="vr-badge-top">
              <small>Active Projects</small>
              <strong>1,247</strong>
            </div>
          </div>
        </section>

        <HowItWorks />

        <Testimonials />

        <section className="cta">

          <div className="cta-overlay"></div>

            <div className="cta-content home">

              <h2><span>Ready to Transform Your </span><br />
                  Constuction Project?</h2>

              <p>Join hundreds of successful projects built with premium materials, expert guidance, and unmatched reliability. Get started in minutes with our streamlined process.</p>

                    <div className="home-align">
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

            
        </>
    );
}

export default Home;