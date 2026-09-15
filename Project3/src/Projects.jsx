import React, { useState } from "react";
import "./Project.css";

import project1 from "./assets/Construction Website/pr1.png";
import project2 from "./assets/Construction Website/pr2.png";
import project3 from "./assets/Construction Website/pr3.png";
import project4 from "./assets/Construction Website/pr4.png";
import project5 from "./assets/Construction Website/pr5.png";
import project6 from "./assets/Construction Website/pr6.png";

function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const projects = [
    {
      id: 1,
      title: "Lakeview Villa - Chennai",
      location: "Chennai",
      area: "3,200 Sq. Ft",
      category: "Residential",
      image: project1,
    },
    {
      id: 2,
      title: "Metro Business Hub - Bangalore",
      location: "Bangalore",
      area: "12,000 Sq. Ft",
      category: "Commercial",
      image: project2,
    },
    {
      id: 3,
      title: "Green Meadows Residence",
      location: "Coimbatore",
      area: "2,400 Sq. Ft",
      category: "Residential",
      image: project3,
    },
    {
      id: 4,
      title: "Skyline Retail Plaza",
      location: "Hyderabad",
      area: "8,500 Sq. Ft",
      category: "Commercial",
      image: project4,
    },
    {
      id: 5,
      title: "Heritage Home Renovation",
      location: "Chennai",
      area: "1,800 Sq. Ft",
      category: "Renovation",
      image: project5,
    },
    {
      id: 6,
      title: "Palm Grove Apartments",
      location: "Trichy",
      area: "15,000 Sq. Ft",
      category: "Residential",
      image: project6,
    },
  ];

  const filters = [
    "All",
    "Residential",
    "Commercial",
    "Interior",
    "Renovation",
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <>
    <section className="projects-section">

      {/* HERO */}
      <div className="projects-hero">
        <div className="projects-overlay">
          <h1>Building Landmarks, Delivering Excellence.</h1>

          <p>
            At BluePeak Infra & Constructions, every project reflects our
            commitment to quality, transparency, and timely delivery.
            Explore our completed and ongoing projects across residential
            and commercial sectors.
          </p>
        </div>
      </div>

      {/* FILTERS */}
      <div className="project-filters">
        {filters.map((filter) => (
          <button
            key={filter}
            className={activeFilter === filter ? "active" : ""}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* PROJECT CARDS */}
      <div className="projects-grid">
        {filteredProjects.map((project) => (
          <div className="project-card" key={project.id}>

            <div className="project-image-container">
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />
              
            </div>

            <div className="project-info">
              <h3>{project.title}</h3>

              <p>
                {project.location} | {project.area}
              </p>

              <button className="view-project-btn">
                View Project <span>→</span>
              </button>
            </div>

          </div>
        ))}
      </div>

    </section>
    <section className="cta">

                <div className="cta-overlay"></div>

                <div className="cta-content project">

                    <h2>Ready to Build with Confidence?</h2>

                    <p>
                        Partner with BluePeak Infra & Constructions and experience structured planning, quality execution, and timely delivery.
                    </p>

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
    </>
  );
}

export default Projects;