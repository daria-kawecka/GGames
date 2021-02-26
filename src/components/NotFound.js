import "../styles/NotFound.scss";
import { ReactComponent as SVG } from "../images/404Page.svg";

const NotFound = () => {
  return (
    <div className="error">
      <div className="error__textContainer">
        <h1 className="error__textContainer--header">Oops!</h1>
        <p className="error__textContainer--text">Page not found :(</p>
        <p className="error__textContainer--404">404 error</p>
        <a href="#/">
          <button className="error__textContainer--button">Back to home</button>
        </a>
      </div> 
      <SVG className="error__svg"></SVG>
    </div>
  );
};

export default NotFound;
