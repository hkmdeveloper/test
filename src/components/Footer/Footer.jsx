import { assets,socialMedia } from "../../assets/assets";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-row">
        {/* <div>
        {footerHeadingImg.map((partner) => (
          <img src={partner.img} key={partner.id} alt="Official Partner" />
        ))}
      </div>  */}
      {/* <div className="ft-img">
              <img src={assets.footerHeading} alt="ABCD" style={{ width: "100%" }} />
            </div> */}
          <div className="footer-left">
            <img
              src={assets.logoWhite}
              alt="Logo"
              style={{ maxWidth: "120px" }}
            />
            <ul>
              {socialMedia.map((media) => (
                <li key={media.id}>
                  <img src={media.img} alt={media.alt} />
                </li>
              ))}
            </ul>
          </div>
          <div className="footer-center">
            <ul>

            <Link
                style={{ color: "white", textDecoration: "none" }}
                to="/responsible-play"
              >
                <li>Responsible Play</li>
              </Link>

            <Link
                style={{ color: "white", textDecoration: "none" }}
                to="/refund-policy"
              >
                <li>Refund Policy</li>
              </Link>

              <Link
                style={{ color: "white", textDecoration: "none" }}
                to="/legality"
              >
                <li>Legality</li>
              </Link>

              
              <Link
                style={{ color: "white", textDecoration: "none" }}
                to="/fantasy-cricket"
              >
                <li>Fantasy Cricket</li>
              </Link>
              <Link
                style={{ color: "white", textDecoration: "none" }}
                to="/fantasy-sports"
              >
                <li>Fantasy Sports</li>
              </Link>

              <a
                style={{
                  color: "white",
                  textDecoration: "none",
                  transition: "1s",
                }}
                href="#how-to-play"
              >
                <li>How to play</li>
              </a>
            </ul>
            <ul>
              <a
                style={{ color: "white", textDecoration: "none" }}
                href="download.apk"
                download="myWicket11.apk"
              >
                <li>Fantasy Cricket App Download</li>
              </a>

              <Link
                style={{ color: "white", textDecoration: "none" }}
                to="/privacy-policy"
              >
                <li>Privacy Policy</li>
                </Link>

                <Link
                style={{ color: "white", textDecoration: "none" }}
                to="/terms-conditions"
              >
                <li>Terms And Conditions</li>
                </Link>
              <Link
                style={{ color: "white", textDecoration: "none" }}
                to="/about-us"
              >
                <li>About Us</li>
              </Link>
              <li>Help & Support</li>
            </ul>
          </div>
          <div className="footer-right">
            <h6>Users who are 18 or older and do not reside in Andhra Pradesh, Assam, Nagaland, Odisha, Sikkim, or Telangana can register on our site.</h6>
            <div className="ft-img">
              <img src={assets.fifs} alt="FIFS" style={{ width: "100%" }} />
            </div>
            {/* <h6>FAIRPLAY POLICY</h6>
            <div className="ft-img">
              <img src={assets.fplogo} alt="FP" style={{ width: "40px" }} />
            </div> */}
          </div>
        </div>
        <div className="border-top">
          <h6>Accelerator Coworking Space, Ground Floor, MGF Metropolis Mall,</h6>
          <p>
          Mehrauli-Gurgaon Rd, Gurugram, Haryana 122002
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="ft-row">
            {/* <Link to="/privacy-policy">Privacy Policy</Link> |{" "}
            <Link to="/terms-conditions">Terms & Conditions</Link> */}
            {/* <Link to="/legality">Legality</Link> |{" "}
            <Link to="/responsible-play">Responsible Play</Link> |{" "}
            <Link to="/refund-policy">Refund Policy</Link>
            <Link to="/about-us">About Us</Link> */}
          </div>
        </div>
      </div>
      {/* <div className="copy-right">
        This game may be habit-forming or financially risky. Play responsibly.
      </div> */}
    </footer>
  );
};

export default Footer;
