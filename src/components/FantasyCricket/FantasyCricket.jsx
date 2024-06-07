import "./FantasyCricket.css";
import React from "react";
import OfficialPartner from "../OfficialPartner/OfficialPartner";
import CustomerReview from "../HowToPlay/CustomerReview";
import { userReview } from "../../assets/assets";

const FantacyCricket = () => {
  return (
    <div>
      <OfficialPartner />
      <div className="review-rating-section">
        <div className="heading">
          Hear it from <span>Our Winners</span>
        </div>
        <div className="customer-review">
          {userReview.map((user) => (
            <CustomerReview key={user.id} {...user} />
          ))}
        </div>
      </div>

      <div className="fc-container">
        <h3 className="fc-heading">
          Fantasy Cricket Industry
          <span style={{ color: "#E10000" }}> Overview In India</span>
        </h3>
        <p className="fc-para">
          India’s online gaming platform takes over 3/4th of the gaming market.
          By far, fantasy sports is one of the most popular genres in the gaming
          world and is estimated to grow to a Rs. 1,65,000 crore market by FY25.
          From just a few fantasy sports gaming platforms in 2016 to 300+
          developers at present, India is remarkably transforming this industry.
        </p>
        <p className="fc-para">
          While Fantasy cricket has been there for a long time, it was in 2008
          when the Indian Premier League was introduced that the cricket world
          was taken by storm. This, in turn, led to the popularity of ‘Fantasy
          cricket.’ Since then, Fantasy sports have advanced faster, and their
          reach widened to other sports such as hockey, football, basketball,
          kabaddi, badminton, etc. However, the most famous arena remains
          Fantasy cricket.
        </p>
      </div>

      <div className="fc-container bg-grey">
        <h3 className="fc-heading">
          Fantasy Cricket
          <span style={{ color: "#E10000" }}> Points System</span>
        </h3>
        <p className="fc-para">
          The Fantasy points differ slightly from one format of cricket to
          another. For example, if a bowler’s economy rate is under 5 runs per
          over in T20I, six points are added. However, there are no points based
          on the economy rate at all in Test cricket. Similarly, if a batter is
          dismissed for a duck in a Test match – four points are deducted.
          However, if the same happens in T10 or a T20 format, two points are
          deducted.
        </p>
        <p className="fc-para">
          This is just to inform you that the points system varies by format.
          Here is a detailed write-up on the fantasy cricket points system. One
          thing, however, which is common across all formats is that the captain
          and vice-captain get 2x and 1.5x the points.
        </p>
      </div>
    </div>
  );
};

export default FantacyCricket;
