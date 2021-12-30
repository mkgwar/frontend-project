import "./Footer.scss";
import img1 from "../images/icon-facebook.svg";
import img2 from "../images/icon-instagram.svg";
import img3 from "..//images/icon-twitter.svg";
import img4 from "../images/icon-pinterest.svg";

export const Footer = () => {
  return (
    <div className="footer">
      <h1 className="footer__logo">sunnyside</h1>
      <div className="footer__links">
        <a href="https://www.google.com">About</a>
        <a href="https://www.google.com">Services</a>
        <a href="https://www.google.com">Projects</a>
      </div>
      <div className="footer__social">
        <img src={img1} alt="social" />
        <img src={img2} alt="social" />
        <img src={img3} alt="social" />
        <img src={img4} alt="social" />
      </div>
    </div>
  );
};
