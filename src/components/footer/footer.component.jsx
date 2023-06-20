import Links from "../nav/links.component";
import Social from "../nav/social.component";
import "./footer.styes.css";

const Footer = () => {
  return (
    <div className="footer">
      <Links />
      <Social />
      <p>Copyright © Backroads Travel Tours Company 2023 All Rights Reserved</p>
    </div>
  );
};

export default Footer;
