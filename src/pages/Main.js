import Header from "../components/Header";

const Main = () => {
  const text = (
    <h1>
      <span>GG</span>ames
    </h1>
  );
  const button = (
    <button className="button">
      {" "}
      <a href="/#/about-us">About us </a>
    </button>
  );
  return (
    <div className="mainPage">
      <Header text={text} button={button} />
    </div>
  );
};

export default Main;
