import "./FAQ.css";

const faqData = [
  {
    question:
      "How much do Indian wedding invitation cards typically cost?",
    answer: (
      <>
        <p>
          The cost of Indian wedding cards can vary widely depending on
          several factors such as design complexity, materials used,
          customization options, and quantity ordered. Typically, Indian
          wedding invitations can range from affordable options to more
          extravagant and luxurious choices.
        </p>

        <p>
          For simpler and more budget-friendly options, you can find Indian
          wedding cards starting from around INR 10 to INR 60 per card.
          These cards may feature standard designs, basic printing
          techniques, and standard paper quality.
        </p>
      </>
    ),
  },

  {
    question:
      "Do you provide sample card before finalizing the order?",
    answer: (
      <p>
        We don't practise business by providing sample cards, since all the
        cards are manufactured against order, once the customer places the
        order, we go for the manufacturing process. So we don't keep sample
        cards to carry.
      </p>
    ),
  },

  {
    question:
      "Do you provide printing services?",
    answer: (
      <p>
        Yes, we provide the cards with printing. The text can be printed in
        ink, foil and by using thermographic process.
      </p>
    ),
  },

  {
    question:
      "How much time will it take for the complete procedure for an order?",
    answer: (
      <p>
        Once the customer approve the proof and after the confirmation of
        the payment, we shall start the printing process and deliver the
        cards in ten working days time. Then the cards can be shipped across
        in three to four days, which is to be door delivered.
      </p>
    ),
  },

  {
    question:
      "Do you provide add on cards like Rsvp, Thank you cards etc.?",
    answer: (
      <p>
        Yes, we provide full range of save the date Card, Rsvp card, Thank
        you card, Place card, Reception card, Sangeet card, Cocktail card,
        Mehandi card etc.
      </p>
    ),
  },

  {
    question:
      "Do you provide the text samples of addon cards?",
    answer: (
      <p className="faq-centered-answer">
        Kindly visit the (*****) for the text samples link.
      </p>
    ),
  },

  {
    question:
      "Could you suggest me, wordings, symbols, logos for the order?",
    answer: (
      <p>
        You can select appropriate text for your card with related logos
        fonts the link and as specified below.
      </p>
    ),
  },

  {
    question:
      "How to place the order after selecting the card?",
    answer: (
      <p>
        You can choose a card from the hosted list and initially register
        with us for proceeding to the order booking. After registration,
        you can book the card with the quantity required and other details.
      </p>
    ),
  },

  {
    question:
      "Can I add up extra page / insert in the card?",
    answer: (
      <p>
        You can add extra inserts to your card. The charges for the insert
        and the printing charges will be additional.
      </p>
    ),
  },

  {
    question:
      "How do we pay through online?",
    answer: (
      <p>
        After all your selections are finished, you can make use of the
        view cost option, to view the entire selections of cards with their
        prices and shipping cost. Then click on the pay icon which will
        take you to the online payment gateway through which the payment
        can be done online within minutes. After the confirmation of the
        payment only we shall start the manufacturing process.
      </p>
    ),
  },
];


function FAQ() {
  return (
    <main className="faq-page">

      {/* ================= FAQ HEADER ================= */}

      <section className="faq-header">
        <h1>FREQUENTLY ASKED QUESTIONS</h1>
      </section>


      {/* ================= FAQ LIST ================= */}

      <section className="faq-container">

        {faqData.map((faq, index) => (
          <div className="faq-item" key={index}>

            <div className="faq-question">
              <span>
                {index + 1}. {faq.question}
              </span>
            </div>

            <div className="faq-answer">
              {faq.answer}
            </div>

          </div>
        ))}

      </section>

    </main>
  );
}

export default FAQ;