import Header from "../components/Header";

const Main = () => {
	const text = (
		<h1>
			<span>GG</span>ames
		</h1>
	);
	return (
		<div className="mainPage">
			<Header text={text} />
		</div>
	);
};

export default Main;
