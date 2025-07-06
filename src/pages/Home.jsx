import ImageBody from "../components/ImageBody";
import React from "react";
import homeImage from "../assets/images/HomePicture.jpg";
import Presentation from "../components/Presentation";
import Support from "../components/Support";

function Home() {
  return (
    <>
      <section className="homeContainer">
        <div className="homeContent">
          <ImageBody
            imageSrc={homeImage}
            title="Sur le chemin du bien-être gynécologique."
          />
        </div>
      </section>
      <section className="homeContent">
        <p>
          C’est en mettant ma sphère gynécologique au cœur de ma vie que j’ai
          trouvé un équilibre et une sérénité. J’ai transformé la relation à
          moi-même de lutte quotidienne en une belle alliance, en écoutant et en
          respectant mes besoins.
        </p>
      </section>
      <section>
        <Presentation />
        <Support />
      </section>
    </>
  );
}

export default Home;
