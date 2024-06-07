import { useEffect, useState } from "react";
import { assets } from "../../assets/assets";
import { visaImg, newFeatureImg,offcialPartner } from "../../assets/assets";
import "./GetApp.css";

const GetApp = () => {
  const [scrolled, setScrolled] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 300) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); 


  return (
    <section className="get-app-section">
      {/* <div className="heading">
        New<span> Features</span>
      </div>
      <div className="official-partner-logo">
        {newFeatureImg.map((partner) => (
          <img src={partner.img} key={partner.id} alt="Official Partner" />
        ))}
      </div> */}
      <div className="get-app-row">
        {/* <div className="mobile-app-image">
          <img src={assets.mobileApp} alt="Mobile App" />
        </div> */}
        <div className="mobile-app-right">
          {/* <ul>
            <li>
              <img src={assets.icon1} alt="games" />
              <p>
                Play with over 20 Crore Leagues users or create your own private
                contest
              </p>
            </li>
            <li>
              <img src={assets.icon2} alt="Friends" />
              <p>Invite your friends & collect big rewards</p>
            </li>
            <li>
              <img src={assets.icon3} alt="Awards" />
              <p>Play more, earn LeaguesCoins & get exciting rewards</p>
            </li>
          </ul> */}
          <div className="download-platform">
            {/* <div className="andriod">
              <a href="download.apk" download="dream11.apk">
                <img src={assets.android} alt="Android" />
              </a>
            </div> */}
            {/* <div className="ios">
              <img src={assets.ios} alt="IOS" />
            </div> */}
          </div>
          {/* <div className='qr-code ${scrolled ? "scrolled" :""}'>
            <img src={assets.qrCode} alt="QR Code" />
            <p>
              Scan the QR Code to download <br />
              the Fantasy Cricket App
            </p>
          </div> */}

          <div className="heading">
        MYWICKEWT11<span> FAQ</span>
          </div>

          {/* <div className="heading">
        Latest News &<span> Blogs</span>
          </div>

          <div className="heading">
        We<span> Accept</span>
        <p>All Major Debit, Credit Cards And Net Banking From Leading Banks</p>
          </div>

          <div className="official-partner-logo">
        {visaImg.map((partner) => (
          <img src={partner.img} key={partner.id} alt="Official Partner" />
        ))}
      </div> */}
        </div>
      </div>
    </section>
  );
};

export default GetApp;
