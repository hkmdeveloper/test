import { useEffect, useState } from "react";
import { assets } from "../../assets/assets";
import { visaImg, newFeatureImg,latestImg,offcialPartner } from "../../assets/assets";
import "./LatestNews.css";

const LatestNews = () => {
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
             
              <div className="get-app-row">
                <div className="mobile-app-right">
                  <div className="download-platform">
                  </div>
        
                  
          <div className="heading">
        Latest News &<span> Blogs</span>
          </div>

          <div className="official-partner-logo">
                {latestImg.map((partner) => (
                  <img src={partner.img} key={partner.id} alt="Official Partner" />
                ))}
              </div>

          <div className="heading">
        We<span> Accept</span>
        <p>All Major Debit, Credit Cards And Net Banking From Leading Banks</p>
          </div>

          <div className="official-partner-logo">
        {visaImg.map((partner) => (
          <img src={partner.img} key={partner.id} alt="Official Partner" />
        ))}
      </div>      
                </div>
              </div>
            </section>
          );
        };


export default LatestNews;