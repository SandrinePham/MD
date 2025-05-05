import "./newsletter.scss";

function Newsletter() {
  return (
    <section className="newsletterContainer">
      <img
        src="/src/assets/images/NewsletterImage.jpg"
        alt="newsletterImage"
        className="newsletterImage"
      />
      <div className="newsletterText">
        <h2 className="newsletterTitle">La Newsletter GynEtMots</h2>
        <p>Ton corps, tes mots, ton bien-être</p>
        <button className="newsletterBtn">Inscription </button>
      </div>
    </section>
  );
}

export default Newsletter;
