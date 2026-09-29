import "./ContactUs.css";

function ContactUs() {
  return (
    <div className="contact-page">

      {/* ================= CONTACT HEADER ================= */}

      <section className="contact-header">
        <h1>Contact Us</h1>

        <p>
          We’d love to hear from you! Whether you have a question,
          need help customizing your invites, or just want to chat
          about your dream wedding stationery — we’re here for you.
        </p>
      </section>


      {/* ================= SUPPORT ================= */}

      <section className="contact-section">

        <h2 className="contact-title">
          <span className="contact-icon">☎</span>
          <u>Support</u>
        </h2>

        <div className="contact-details">

          <p>
            <strong>India (toll free):</strong><br />
            999-264-9444
          </p>

          <p>
            <strong>Only Call - No WhatsApp Number</strong><br />
            <a href="mailto:sales@wedknotcraftinvitationcards.com">
              sales@wedknotcraftinvitationcards.com
            </a>
          </p>

        </div>

      </section>


      {/* ================= PROOFING ================= */}

      <section className="contact-section proofing-section">

        <h2 className="contact-title">
          <span className="contact-icon">📧</span>
          <u>Proofing Department</u>
        </h2>

        <div className="contact-details">

          <p>
            Indian Standard Time (IST)<br />
            Mobile (9.00am to 9.00pm IST) Monday to Saturday
          </p>

          <p>
            <strong><u>HR Team</u></strong><br />
            +91 9876543210<br />
            <a href="mailto:hrteam@wedknotcraftinvitationcards.com">
              hrteam@wedknotcraftinvitationcards.com
            </a>
          </p>

          <p>
            <strong><u>Customer Support Team</u></strong><br />
            +91 9876543210<br />
            <a href="mailto:customersupport@wedknotcraftinvitationcards.com">
              customersupport@wedknotcraftinvitationcards.com
            </a>
          </p>

        </div>

      </section>


      {/* ================= CONTACT US ================= */}

      <section className="contact-section final-contact">

        <h2>Contact Us</h2>

        <p>
          Whether you’re looking for inquires, would like to ask
          before ordering, or just want to let us know how we did.
        </p>

      </section>


      {/* ================= ONLINE STORE ================= */}

      <section className="online-store">

        <h2>
          An online Invitation Store with Worldwide Delivery
        </h2>

        <div className="store-content">

          <p>
            Weddings are always special but the fact about
            Wedknotcraft wedding Cards is that they are bespoke
            and exquisite in design that wins the hearts of
            millions across the world.
          </p>

          <p>
            The team behind us is extremely talented and has more
            than 50 years of experience with them to translate
            your dream wedding card into reality.
          </p>

          <p>
            If you want your wedding card to be truly rare and
            exceptional then look no further. The team here is
            fully able to weave dreams into reality.
          </p>

          <p>
            No matter what kind of wedding you have planned,
            <a
              href="https://wedknotcraft.in"
              target="_blank"
              rel="noopener noreferrer"
            >
              wedknotcraft.in
            </a>{" "}
            is well known to design various wedding invitations
            like Hindu Wedding Cards, Muslim Wedding Cards,
            Sikh Wedding Cards, Interface Wedding Cards and so on.
          </p>

        </div>

        <p className="contact-last-line">
          If you have any query related to invitation designs or
          our cards, please feel free to contact us!!!
        </p>

      </section>

    </div>
  );
}

export default ContactUs;