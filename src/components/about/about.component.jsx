import img from "../../assets/images/about.jpeg";
import "./about.styles.css";
const AboutUs = () => {
  return (
    <div id="about" className="about container">
      <h1 className="special-header">
        About <span>Us</span>
      </h1>
      <div className="flex-box">
        <div className="image">
          <img src={img} alt="about" />
        </div>
        <div className="text">
          <h1>Explore The Difference</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
            quisquam harum nam cumque temporibus explicabo dolorum sapiente odio
            unde dolor? Lorem ipsum, dolor sit amet consectetur adipisicing
            elit. Aspernatur quisquam harum nam cumque temporibus explicabo
            dolorum sapiente odio unde dolor?
          </p>
          <button>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
