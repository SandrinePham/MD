import "./quizz.scss";

function Quizz() {
  return (
    <section className="quizz">
      <h2 className="quizzTitle">QUIZZ DECOUVRE TON PROFIL DE SPM !</h2>
      <div className="quizzText">
      <p>Tu veux savoir si tu es plutôt gonflée à bloc ? Mélancolique ? Prête à tout croquer ? Ou bien une boule de nerfs ?</p>
      <p>N’attends pas plus longtemps pour découvrir ton profil de SPM et obtenir des pistes pour apaiser tes symptômes !</p>
      </div>
      <button className="quizzBtn">Je passe le test ici ! </button>
    </section>
  );
}

export default Quizz;
