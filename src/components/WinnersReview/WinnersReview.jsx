import React from "react";
import winner1 from "../../assets/winner-1.jpeg";
import winner2 from "../../assets/winner-2.jpeg";
import winner3 from "../../assets/winner-3.jpeg";
import "./WinnersReview.css";

import cup from "../../assets/cup.png";

const WinnersReview = () => {
  return (
    <div className="wr-container">
      <div className="wr-heading-container">
        <h2 className="wr-heading">
          Hear it from <span className="wr-span-blue">Our Winners</span>
        </h2>
      </div>
      <div className="wr-main-container">
        <div className="wr-review-container">
          <img
            src={winner1}
            style={{
              borderRadius: "50%",
              width: "110px",
              height: "110px",
              objectFit: "cover",
            }}
          />
          <h4 style={{ color: "white" }}>Jigar Suthar</h4>
          <p style={{ color: "white", fontSize: "12px" }}>Gujarat</p>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <img src={cup} width="32px" />
{/*             <h5 style={{ color: "#f8b64c", fontSize: "16px" }}>WON </h5> */}
          </div>
          <p
            style={{
              color: "white",
              fontSize: "16px",
              textAlign: "center",
              lineHeight: "1.4",
            }}
          >
            Over the years, I've explored numerous gaming platforms, but I must
            say, I've never encountered a fantasy app as impressive as this one.
            The attention to detail and user experience is truly remarkable.
            What's even more commendable is the customer service.
          </p>
          <img />
        </div>
        <div className="wr-review-container">
          <img
            src={winner2}
            style={{
              borderRadius: "50%",
              width: "110px",
              height: "110px",
              objectFit: "cover",
            }}
          />
          <h4 style={{ color: "white" }}>Naresh</h4>
          <p style={{ color: "white", fontSize: "12px" }}>Rajasthan</p>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <img src={cup} width="32px" />
{/*             <h5 style={{ color: "#f8b64c", fontSize: "16px" }}>WON </h5> */}
          </div>
          <p
            style={{
              color: "white",
              fontSize: "16px",
              textAlign: "center",
              lineHeight: "1.4",
            }}
          >
            What I have really appreciate is its top-notch referral system,
            which sets apart. The unique feature of utilizing the joining bonus
            to enter contests adds to its appeal. With a small investment, I
            managed to secure returns that have exceeded my expectations
            multiple times.
          </p>
          <img />
        </div>
        <div className="wr-review-container">
          <img
            src={winner3}
            style={{
              borderRadius: "50%",
              width: "110px",
              height: "110px",
              objectFit: "cover",
            }}
          />
          <h4 style={{ color: "white" }}>Renish Shingala</h4>
          <p style={{ color: "white", fontSize: "12px" }}>Gujarat</p>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <img src={cup} width="32px" />
{/*             <h5 style={{ color: "#f8b64c", fontSize: "16px" }}>WON 2 LAKH</h5> */}
          </div>
          <p
            style={{
              color: "white",
              fontSize: "16px",
              textAlign: "center",
              lineHeight: "1.4",
            }}
          >
            The emergence of My Master 11 has truly revolutionized the world of
            Fantasy apps With its user-friendly interface. It offers a fantastic
            avenue to engage in contests with minimal risk, while significantly
            boosting the possibilities of winning substantial points prizes.
          </p>
          <img />
        </div>
      </div>
    </div>
  );
};

export default WinnersReview;
