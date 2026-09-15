import "./Contact.css";
import Footer from "./footer";

function Contact() {

    return (
      
        <div className="contact-page">

            <section className="contact-hero">

                <div className="hero-overlay"></div>

                <div className="contact-hero-content">
                    <h1>Let's Build Something Great Together</h1>

                    <p>
                        Have a project in mind? Get in touch with BlurPeak Infra & Constructions today.
                        Our eprts are ready to guide you from planning to completion.
                    </p>
                </div>
            </section>

            <section className="contacts-section">

                <div className="contacts-container">

                    <div className="contacts-info">

                      <div>
                        <h2>
                        We're here to <span>help,<br/> anytime</span>
                        
                        </h2>
                      </div>

                        

                        <div className="info-grid">

                            <div className="info-card">
                                <div className="info-icon">⌖</div>

                                <div>
                                    <h3>Office Address</h3>
                                    <p>
                                        BluePeak Infra &<br />
                                        Constructions<br />
                                        Chennai, Tamil Nadu, India
                                    </p>
                                </div>
                            </div>


                            <div className="info-card">
                                <div className="info-icon">☎</div>

                                <div>
                                    <h3>Phone Number</h3>
                                    <p>
                                        +1 (555) 123-4566<br />
                                        +1 (555) 987-6543
                                    </p>
                                </div>
                            </div>


                            <div className="info-card">
                                <div className="info-icon">✉</div>

                                <div>
                                    <h3>Email Address</h3>
                                    <p>
                                        info@bluebeak.com<br />
                                        support@bluebeak.com
                                    </p>
                                </div>
                            </div>


                            <div className="info-card">
                                <div className="info-icon">◷</div>

                                <div>
                                    <h3>Business Hours</h3>
                                    <p>
                                        Monday - Friday: 8:00 AM - 6:00 PM<br />
                                        Saturday: 9:00 AM - 4:00 PM <br />
                                        Sunday: Closed
                                    </p>
                                </div>
                            </div>

                        </div>

                    </div>

                    <div className="contact-form-container">

                        <h2>Send Us a Message</h2>

                        <form>

                            <div className="form-row">

                                <div className="form-group">
                                <label>Name</label>
                                <input
                                    type="text"
                                    placeholder="Name"
                                />
                                </div>

                                <div className="form-group">
                                  <label>Email Address</label>
                                  <input
                                    type="email"
                                    placeholder="Enter Email Address"
                                  />
                                </div>

                              </div>


                            <div className="form-row">

                              <div className="form-group">
                                <label>Phone Number</label>
                                <input
                                  type="text"
                                  placeholder="+91 Your Phone Number"
                                />
                              </div>

                <div className="form-group">
                  <label>Project Type</label>

                  <select>
                    <option>Select Type</option>
                    <option>Residential</option>
                    <option>Commercial</option>
                    <option>Renovation</option>
                    <option>Interior</option>
                  </select>

                </div>

              </div>


              <div className="form-group location-group">
                <label>Location</label>

                <select>
                  <option>Chennai</option>
                  <option>Bangalore</option>
                  <option>Hyderabad</option>
                  <option>Mumbai</option>
                  <option>Delhi NCr</option>
                  <option>Other Cities</option>
                </select>

              </div>


              <div className="form-group">
                <label>Message</label>

                <textarea></textarea>

              </div>


              <div className="btn-border">
                <button className="consultation-btn">Send message </button>
                <span>›</span>
              </div>

            </form>

          </div>

        </div>


        {/* ================= MAP ================= */}
        <div className="map-container">

          <div className="map-placeholder">

            <div className="map-location">
              <p><strong>India</strong></p>
              <p>Chennai, Tamil Nadu</p>
            </div>

          </div>

        </div>

      </section>


      {/* ================= CTA ================= */}
      <section className="contact-cta">

        <div className="cta-overlay"></div>

        <div className="cta-content">

          <h2>Ready to Start Your Construction Journey?</h2>

          <p>
           Book a free technical consultation and get a transparent cost estimate for your project.
          </p>

          <div className="btn-align">
              <div className="white-border">
                  <div className="book-btn-border">
                    <button className="book-btn">Book Free Consultation</button>
                    <span>›</span>
                  </div>
              </div>
          </div>

        </div>

      </section>


    </div>
  );
}

export default Contact;

    