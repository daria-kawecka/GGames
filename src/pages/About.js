import Header from "../components/Header";
import Section from "../components/Section";
import Crew from "../components/Crew";
import Map from "../components/Map";

const About = () => {
  return (
    <>
      <Header></Header>
      <section className="aboutSection">
        <Section />
      </section>
      <section className="crewSection">
        <Crew></Crew>
      </section>
      <section className="mapSection">
        <div class="map-container">
          <Map></Map>
        </div>
      </section>
    </>
  );
};

export default About;
