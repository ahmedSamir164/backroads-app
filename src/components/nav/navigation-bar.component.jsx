import Links from "./links.component";
import Social from "./social.component";
import "./navigation-bar.styles.css";
export const NavigationBar = () => {
  return (
    <div className="navigation-bar container">
      <div className="title">
        <h2>Back</h2>
        <h2>Roads</h2>
      </div>
      <Links />
      <Social />
    </div>
  );
};

export default NavigationBar;
