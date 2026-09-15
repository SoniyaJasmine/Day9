function WhyChooseUs() {
    const features = [
        {
        icon: "✓",
        title: "Guaranteed Price Protection",
        text: "No hidden costs. No surprises. Transparent and detailed quotation before project start."
        },
        {
        icon: "✓",
        title: "440+ Quality Checks",
        text: "Every stage of construction undergoes strict quality inspection."
        },
        {
        icon: "✓",
        title: "Timely Delivery",
        text: "We follow structured planning and restore tracking to ensure on-time completion."
        },   
        {
        icon: "▣",
        title: "Payment in Stages",
        text: "Pay in flexible construction-linked stages for financial convenience."
        },
        {
        icon: "▣",
        title: "24/7 Real-Time Tracking",
        text: "Monitor your project progress digitally from anywhere."
        }
    ];
    return (
        <section className="why-section">
            <div className="why-heading">
                <h2>Why Choose Us</h2>
                <p>Comprehensive solutions designed for modern construction projects</p>
            </div>
            <div className="why-container">
                {features.map((feature, index) => (
                    <div className={`why-card card-${index}`}>
                        <div className="why-icon">
                            {feature.icon}
                        </div>
                        <h3>{feature.title}</h3>
                        <p>{feature.text}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default WhyChooseUs;