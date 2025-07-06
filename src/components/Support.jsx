import "./support.scss";

function Support() {
  return (
    <section className="supportContainer">
      <h2 className="supportTitle">MES ACCOMPAGNEMENTS</h2>
      <div className="support">
        <div className="supportPart">
          <h3>Gyn’écologie émotionnelle</h3>
          <p className="supportText">
            Ton corps parle, tes symptômes sont des messages. Ensemble, on les
            décrypte pour que tu retrouves bien-être et équilibre.
          </p>
          <button className="learnMore">En savoir plus </button>
        </div>
        <div className="supportPart">
          <h3>Symptothermie</h3>
          <p className="supportText">
            Méthode d’observation du cycle menstruel. Apprends à l’écouter pour
            une contraception naturelle ou un projet bébé serein.
          </p>
          <button className="learnMore">En savoir plus </button>
        </div>
      </div>
    </section>
  );
}

export default Support;
