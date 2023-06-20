import React from "react";
import "./home.styles.css";

const Home = () => {
  return (
    <div className="home" id="home">
      <div className="overlay"></div>
      <div className="content">
        <h1>CONTINUE EXPLORING</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
          explicabo debitis est autem dicta.
        </p>
        <button>Explore Tours</button>
      </div>
    </div>
  );
};

export default Home;
