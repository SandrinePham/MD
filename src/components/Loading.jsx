import bookImage from "../assets/images/book.jpg";
import "./loading.scss";

function Home() {
  return (
    <section className="telechargement">
      <div className="telechargementText">
        <p>
          Télécharge ton guide gratuit pour apprendre à observer ton cycle et
          décoder ses messages !
        </p>
        <button className="telechargementButton">Télécharger</button>
      </div>
      <div className="telechargementPicture">
        <img
          className="telechargementImage"
          src={bookImage}
          alt="Photo de Mélanie Dizet"
        />
      </div>
    </section>
  );
}

export default Home;
