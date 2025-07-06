import Portrait from "../assets/images/portrait.jpg";
import "../components/presentation.scss";

function Presentation() {
  return (
    <section className="presentation">
      <img
        className="presentationPicture"
        src={Portrait}
        alt="Photo de Mélanie Dizet"
      />
      <div className="presentationText">
        <h2> Bonjour !</h2>
        <p>
          Je suis <b>Mélanie</b>.
        </p>
        <p >
          C’est en mettant ma sphère gynécologique au cœur de ma vie que j’ai
          trouvé un équilibre et une sérénité. J’ai transformé la relation à
          moi-même de lutte quotidienne en une belle alliance, en écoutant et en
          respectant mes besoins.
        </p>
        <p>
          Ton <b>bien-être gynécologique</b>, c’est ta force, je t’aide à la
          révéler.
        </p>
        <p>
          Viens découvrir mes <b>spécialités</b> !
        </p>
      </div>
    </section>
  );
}

export default Presentation;
