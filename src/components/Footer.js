import "../styles/Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__company">
        <p className="footer__company--text">GGames</p>
        <p className="footer__company--location">
          {" "}
          <i className="fas fa-map-marker-alt"></i>Budryka 3, Kraków
        </p>
        <p className="footer__company--phone">
          <i className="fas fa-phone-alt"></i>+48 122 211 122
        </p>
        <p className="footer__company--email">
          <i className="fas fa-at"></i>contactUs@email.com
        </p>
      </div>
      <div className="footer__contribution">
        <p className="footer__contribution--author">
          {" "}
          &copy; 2021 Daria Kawecka
        </p>
        <p className="footer__contribution--github">
          <i className="fab fa-github">
            {" "}
            <a
              className="footer__contribution--github--link"
              href="https://github.com/daria-kawecka/GGames"
            >
              Show code
            </a>{" "}
          </i>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
