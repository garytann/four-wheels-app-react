import "../Styles/hero.css";

function Hero() {
  return (
      <div className="img-container">
          <div className="text-container">
              <h1 className="title">
                  SKATE WITH US
              </h1>
              <button className="start-button">
                  Get Started
              </button>
          </div>
          <p className="btm-text">sports, skates & co</p>
      </div>
  );
}

export default Hero;