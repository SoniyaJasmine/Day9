import "./About.css"

function About() {

    const stats = [
        { number: "500+", text: "Happy Clients" },
        { number: "1,200+", text: "Projects Completed" },
        { number: "98.5%", text: "Satisfaction Rate" },
        { number: "24/7", text: "Support Available" },
    ];

    const values = [
        {
        image: "src/assets/Construction Website/images.png",
        title: "Integrity",
        text: "We maintain complete transparency in pricing, communication, and project execution to build lasting trust.",
        },
        {
        image: "src/assets/Construction Website/premium-certified-quality-stamp_78370-1800.avif",
        title: "Quality",
        text: "Strict quality checks and premium materials ensure every structure is strong, safe and durable.",
        },
        {
        image: "src/assets/Construction Website/11320141.png",
        title: "Commitment",
        text: "We are dedicated to delivering projects on time while maintaining the highest construction standards.",
        },
        {
        image: "src/assets/Construction Website/1083501.png",
        title: "Customer Focus",
        text: "We design and build every project around our client's vision, needs, and long-term satisfaction.",
        },
    ];

    const team = [
        {
        image: "src/assets/Construction Website/P1.png",
        name: "Robert Anderson",
        role: "Chief Executive Officer",
        },
        {
        image: "src/assets/Construction Website/p2.png",
        name: "Jennifer Martinez",
        role: "Head of Design",
        },
        {
        image: "src/assets/Construction Website/p3.png",
        name: "Michael Thompson",
        role: "Project Manager",
        },
        {
        image: "src/assets/Construction Website/p4.png",
        name: "Sarah Williams",
        role: "Head of Design",
        },
    ];

    return(
        <div className="page">
            <section className="about" id="home">

                <div className="about-overlay"></div>

                <div className="about-content">
                    <h1>Building Landmarks. Delivering Excellence.</h1>

                    <p>
                        At BluePeak Infra & Construction, every project reflects our commitment to quality, transparency and timely delivery. Explore our completed and ongoing projects across residential and commrcial sectors
                    </p>
                </div>
            </section>

            <section className="stats-container">
                {stats.map((stat, index) => (
                    <div className="stat-card" key={index}>
                        <h2>{stat.number}</h2>
                        <p>{stat.text}</p>
                    </div>
                ))}
            </section>

            <section className="story section" id="about">

                <div className="story-text">

                    <h2>Our Story</h2>

                    <p>
                        BluePeak Infra & Constructions was founded with a clear mission - to bring reansparency, quality, and reliablity into the construction industry. What
                        began as a small team of dedicated engineers and designers has grown into a trusted partner for residential and commercial projects, delivering
                        structured planning, transparent pricing, and strict quality control at every stage. Over the years, we have successfully completed hundreds of
                        projects, introducted advanced 3D design and VR walkthrough experiences, and built long-lasting relationships based on trust and performance. At
                        BluePeak, we don't just construct buildings - we create strong foundations for dreams, businesses, and future generations.
                    </p>

                </div>

                <div className="story-images">
                    <div>
                        <img
                        className="story-large"
                        src="src/assets/Construction Website/c2.png"
                        alt="Construction team"
                    />
                    </div>
                    
                    <div>
                        <img
                        className="story-small"
                        src="src/assets/Construction Website/ChatGPT Image Mar 2, 2026, 02_21_10 PM.png"
                        alt="Construction project"
                    />
                    </div>
                    

                </div>

            </section>

            <section className="mission-section">

                <div className="mission-card">

                    <div className="mission-icon">
                        <img src="src/assets/Construction Website/Mission-PNG-Clipart-Background.png" alt="" />
                    </div>

                    <div>
                        <h3>Mission</h3>

                        <p>
                        To deliver high-quality residential and commercial
                        construction services with transparency, precision, and timely execution.
                        We are committed to maintaining strict quality standards, fair pricing, and structured project 
                        management to ensure complete customer satisfaction at every stage.
                        </p>
                    </div>

                </div>


                <div className="vision-card">

                    <div className="vision-icon">
                        <img src="src/assets/Construction Website/ec470275507757cef73993b78b1027c4.jpg" alt="" />
                    </div>

                    <div>
                        <h3>Vision</h3>

                        <p>
                        To become a trusted and leading construction brand known
                        for innovation, reliability and excellence in engineering - building
                        spaces that stand strong, inspire confidence, and create lasting value for generations.
                        </p>
                    </div>

                </div>

            </section>

            <section className="values section">
                <h2 className="section-title">Our Core Values</h2>
                <div className="values-grid">
                    {values.map((value, index) => (
                        <div className="value-card">
                            <div className="value-icon">
                                <img src={value.image} alt="" />
                            </div>
                            <h3>{value.title}</h3>
                            <p>{value.text}</p>
                        </div>

                    ))}
                </div>
            </section>

            <section className="team section">

                <h2 className="section-title">Meet Our Team</h2>

                <p className="team-subtitle">
                Experienced professionals dedicated to your success
                </p>

                <div className="team-grid">

                    {team.map((member, index) => (

                    <div className="team-member" key={index}>

                        <div className="team-image">

                            <img
                            src={member.image}
                            alt={member.name}
                            />

                            {/* yellow hover overlay */}
                            <div className="team-overlay"></div>

                        </div>

                        <h3>{member.name}</h3>

                        <p>{member.role}</p>

                    </div>

                ))}

                </div>

            </section>

            <section className="cta">

                <div className="cta-overlay"></div>

                <div className="cta-content">

                    <h2>Join Our Growing Family</h2>

                    <p>
                        Be part of a team that's building the future of construction
                    </p>

                    <div className="join-align">
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

export default About;