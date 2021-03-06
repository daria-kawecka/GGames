import Header from "../components/Header";
import Section from "../components/Section";
import Crew from "../components/Crew";
import Location from "../components/Location";
import Footer from "../components/Footer";
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
      <Footer></Footer>
    </>
  );
};

export default About;
