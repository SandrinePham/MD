import "./about.scss";
import portrait from "../assets/images/portrait_449.jpg";
import value from "../assets/images/valueImage_449.jpg";
import training from "../assets/images/formationImage.jpg";
import Article from "../components/Article";
import React from "react";

function About() {
  return (
    <>
      <h1>Vers un mieux-être gynécologique.</h1>
      <p>
        Bienvenue, je suis Mélanie Dizet, accompagnante en autonomie
        gynécologique et passionnée par l’exploration de notre lien intime au
        corps.
      </p>

      <Article
        image={portrait}
        alt="Mélanie Dizet"
        title="Mon parcours"
        className="mycourse portrait"
      >
        <p>
          Diagnostiquée d’endométriose il y a plusieurs années, j’ai connu des
          périodes de douleurs intenses et de frustration face à mon propre
          corps. Ce défi a été le point de départ d’une quête qui m’a menée à
          comprendre les mécanismes profonds de mon cycle, de mon bien-être, et
          surtout, à apprivoiser la relation entre mes émotions et ma sphère
          gynécologique.
        </p>
        <p>
          Petit à petit, je me suis plongée dans l’univers de la gynécologie
          sous des angles plus holistiques, intégrant des approches naturelles,
          la Symptothermie, et la Gyn’écologie Emotionnelle. Conférences,
          formations, échanges et pratiques ont jalonné ce chemin, et au fil des
          années, j’ai pu sentir une transformation progressive en moi-même : un
          apaisement durable et une meilleure connaissance de mon corps.
          Aujourd’hui, je vis sans symptôme contraignant au quotidien, une
          liberté qui n’aurait pas été possible sans ce parcours de
          réappropriation et de réconciliation avec mon cycle.
        </p>
        <p>
          Consciente de l’importance de ces connaissances, j’ai ressenti l’élan
          de partager ce que j’avais appris. Formée pour accompagner chaque
          personne dans la compréhension et le respect de sa propre expérience,
          je suis aujourd’hui ici pour offrir un soutien vers plus de sérénité
          et d’autonomie. Mon expérience personnelle est au cœur de ma pratique
          : elle m’a appris que chacun·e peut se reconnecter profondément à son
          corps et retrouver un équilibre qui lui est propre.
        </p>
      </Article>
      <Article
        image={value}
        alt="Les valeurs de Mélanie Dizet"
        title="Mes valeurs"
        className="myValues values"
        intro="Chaque personne mérite de se sentir respectée dans son parcours, et c’est avec bienveillance et authenticité que je m’engage à être à vos côtés. Voici les valeurs qui sont au cœur de mon approche :"
        listItems={[
          {
            label: "Justice et Inclusion",
            text: "Créer un espace accessible et inclusif, où chacun·e peut trouver des réponses adaptées à sa singularité.",
          },
          {
            label: "Respect et Bienveillance",
            text: "Accueillir chaque parcours avec douceur, sans jugement.",
          },
          {
            label: "Autonomie",
            text: "Transmettre des outils qui permettent de comprendre et de gérer son bien-être gynécologique de manière indépendante.",
          },
          {
            label: "Empowerment",
            text: "Redonner à chacun·e le pouvoir de se réapproprier son corps et ses choix, avec confiance.",
          },
          {
            label: "Transmission et Partage",
            text: "Communiquer des connaissances qui redonnent du pouvoir et de la clarté sur ce qui se passe en soi.",
          },
        ]}
        reverse={true}
      />

      <Article
        image={training}
        alt="Les formations de Mélanie Dizet"
        title="Ma formation"
        className="mytraining training"
        intro="Guidée par cette vision, j’ai suivi des formations reconnues pour acquérir les compétences nécessaires et offrir un accompagnement de qualité. Je suis :"
        listItems={[
          "Accompagnante en Gyn’écologie Emotionnelle – formée à la méthode Gyn’émotion®, Uterra",
          "Conseillère en Autonomie de la Fertilité – spécialisée en méthode Symptothermique, Intimité de femmes",
          "Educatrice menstruelle – Académie Kiffe Ton Cycle",
          "Coach – Paradox School, (formation en cours)",
        ]}
      >
        <p>
          Mon objectif est simple : vous permettre d’accéder à une compréhension
          profonde de votre corps, pour que vous puissiez vous reconnecter à
          vous-même et avancer, sereinement et en confiance, sur votre propre
          chemin du bien-être gynécologique.
        </p>
      </Article>
    </>
  );
}

export default About;
