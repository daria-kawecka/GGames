import Header from "../components/Header";
import Section from "../components/Section";
import Crew from "../components/Crew";

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
		</>
	);
};

export default About;
