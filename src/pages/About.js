import Header from "../components/Header";
import Section from "../components/Section";
import Crew from "../components/Crew";
import Map from "../components/Map";
import Location from "../components/location";

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
      <section className="locationSection">
        {/* <div class="map-container">
          <Map></Map>
        </div> */}
        <Location></Location>
      </section>
    </>
  );
};

export default About;
