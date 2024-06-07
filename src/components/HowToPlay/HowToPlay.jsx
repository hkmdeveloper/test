import { FaStar, FaStarHalfStroke } from "react-icons/fa6";
import { assets, userReview } from "../../assets/assets";
import CustomerReview from "./CustomerReview";
import "./HowToPlay.css";

const HowToPlay = () => {
  return (
    <section className="howtoplay-section" id="how-to-play">
      <div className="heading">
        How to <span>Play</span>
      </div>

      <div className="app-para">
        <p>
          Ready to challenge other sports fans? Watch this video to learn how to
          play on MyWicket11 and get started now. Compete with sports fans, make a
          perfect MyWicket11 team with the best combination of players as per your
          knowledge and skill and win big.
        </p>
      </div>
      {/* <div className="video-div">
        <img src={assets.howToPlay} alt="How to play" />
      </div>

      <div className="review-rating-section">
        <div className="heading">
          Hear it from <span>Our Winners</span>
        </div>
     
      </div> */}
    </section>
  );
};

export default HowToPlay;
