import "../Styles/hero.css";

function Hero() {
  return (
      <div className="imgContainer">
          <div className="textContainer">
              <h1 className="title">
                  SKATE WITH US
              </h1>
              <button className="startButton">
                  Get Started
              </button>
          </div>
          <p className="bottomText">sports, skates & co</p>
      </div>
  );
}

export default Hero;