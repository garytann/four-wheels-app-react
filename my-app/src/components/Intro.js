import beginner from '../assets/images/beginner.png';
import intermediate from "../assets/images/intermediate.png"
import advanced from "../assets/images/advanced.png"

import "../Styles/intro.css";

function Intro(){
    return (
        <div className="container">
            <div className="item-container">
                <img src={beginner} alt="beginner" className="round-image"/>
                <h2>Beginner</h2>
                <p className="text">
                    Our beginner program is designed to help you learn the basics of skating.
                </p>
            </div>

            <div className="item-container">
                <img src={intermediate} alt="beginner" className="round-image"/>
                <h2>Intermediate</h2>
                <p className="text">
                    Our beginner program is designed to help you learn the basics of skating.
                </p>
            </div>

            <div className="item-container">
                <img src={advanced} alt="beginner" className="round-image"/>
                <h2>Advanced</h2>
                <p className="text">
                    Our beginner program is designed to help you learn the basics of skating.
                </p>
            </div>
        </div>
    )
}

export default Intro;