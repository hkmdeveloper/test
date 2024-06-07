import React from "react";
import twophones from "../../assets/twophones-img.png";
import { assets } from "../../assets/assets";
import "./WelcomeBonus.css";

const WelcomeBonus = () => {
  return (
    <div className="wb-container">
      <div className="wb-image-container">
        <img className="wb-image" src={twophones} />
      </div>
      <div className="wb-text-container">
        <h3 className="wb-heading">
          A Super <span className="wb-text-gold">Welcome Bonus</span>
        </h3>
        <p className="wb-text_1">DOWNLOAD & REGISTER TO GET</p>
        <p className="wb-text_2">
          <span className="wb-text-gold">₹200</span> Sign up bonus
        </p>
          <div className="andriod">
              <a href="download.apk" download="mwWicket11.apk">
                <img src={assets.android} alt="Android" />
              </a>
            </div>
        <p className="wb-text_3">
          *As per Google policies, we cannot offer points Contests on the Play
          Store.
        </p>
      </div>
    </div>
  );
};

export default WelcomeBonus;
