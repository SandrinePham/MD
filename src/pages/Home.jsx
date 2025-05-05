import "./home.scss";
import ImageBody from "../components/ImageBody";
import React from "react";
import homeImage from "../assets/images/homeImage.jpg";
import Presentation from "../components/Presentation";
import Loading from "../components/Loading";
import Quizz from "../components/Quizz";
import Support from "../components/Support";
import Newsletter from "../components/Newsletter";
import Approach from "../components/Approach";

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
        <Approach />
        <Presentation />
        <Support />
        <Loading />
        <Quizz />
        <Newsletter />
      </section>
    </>
  );
}

export default Home;
