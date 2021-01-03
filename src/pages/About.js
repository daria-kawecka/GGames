import Header from "../components/Header";
import Section from "../components/Section";
import Crew from "../components/Crew";
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
        <Location></Location>
      </section>
    </>
  );
};

export default About;
