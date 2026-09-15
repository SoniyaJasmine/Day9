function HowItWorks() {
  const steps = [
    {
      number: "1",
      title: "Technical Consultation",
      image: "src/assets/Construction Website/ChatGPT Image Mar 2, 2026, 02_19_55 PM.png",
      text: "Share your vision for your dream home with our experienced architect. Leverage advanced technology and extensive design & construction expertise, we provide tailored solutions that meet your specific requirements and budget, transforming your vision into a reality."
    },
    {
      number: "2",
      title: "Booking",
      image: "src/assets/Construction Website/ChatGPT Image Mar 2, 2026, 02_21_10 PM.png",
      text: "e"
    },
    {
      number: "3",
      title: "Design and Planning",
      image: "src/assets/Construction Website/c4.png",
      text: "Collaborate with our highly skilled architects to design your home that reflects your personal style and functional needs. Our design process incorporates the latest technology to develop precise architectural plans, which are then handed over to our experienced Civil Engineers for Structural and MEP Drawings. Upon approval of these plans, Our AI seamlessly schedules the project and transitions it to the construction phase."
    },
    {
        number: "4",
        title: "Home Construction",
        image: "src/assets/Construction Website/ChatGPT Image Mar 2, 2026, 02_23_26 PM.png",
        text:"Emperience the construction of your dream home with our skilled team, utilizing stat-of -art technology to ensure the highest standards of quality and safety. Benefit from continous inspections with over 440+ quality checks, and stay informed with regular updates through your real-time construction project dashboard."
    },
    {
        number: "5",
        title: "Move-in",
        image: "src/assets/Construction Website/ChatGPT Image Mar 2, 2026, 02_25_23 PM.png",
        text:"Move into your new home with a 10-years structural warranty. Our commitment to quality and customer satisfaction continues even after project completion. Post-construction, our experienced team is available for any service and maintenance needs. Additionally, you can opt for our advancednmaintenance package to ensure long-term durability and peace of mind."
    }
  ];

  return (
    <section className="works-section">

      <div className="works-heading">
        <h2>How It Works</h2>
        <p>A streamlined process designed for efficiency and transparency</p>
      </div>

      <div className="timeline">

        {steps.map((step, index) => (

          <div className={`timeline-item ${index % 2 === 1 ? "reverse" : ""}`} key={index}>

            <div className="timeline-number">
              {step.number}
            </div>

            <div className="timeline-image">
              <img src={step.image} alt={step.title} />
            </div>

            <div className="timeline-content">
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default HowItWorks;