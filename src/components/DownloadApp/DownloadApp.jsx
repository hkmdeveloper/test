import { useEffect, useState } from "react";
import { assets } from "../../assets/assets";
import "./DownloadApp.css";

const DownloadApp = () => {
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
    <>
      <div className="download-app-container">
        <div className="download-wrapper">
          {/* <div className="download-app-heading">
            Download official <br />
            Dream11 app
          </div> */}
          <div className="download-app-inputs">
            <div className="download-app-desktop">
              <a
                style={{ color: "white", textDecoration: "none" }}
                href="download.apk"
                download="myWicketApp.apk"
              >
                <img src={assets.downloadAppBtn} alt="Download App" />
              </a>
            </div>
            {/* <a href="https://www.google.com/">
            <button className="get-app-link-btn">Get Whats App link</button>
            </a> */}
          </div>
        </div>
      </div>
      <div className={`download_mobile_app ${scrolled ? "scrolled" : ""}`}>
        <a href="#">
          <button className="get-app-link-btn">Get Whats App link</button>
        </a>
        {/* <a href="#">
          <img src={assets.downloadAppBtn} alt="Download App" />
        </a> */}
      </div>
    </>
  );
};

export default DownloadApp;

// import { useEffect, useState } from "react";
// import { assets } from "../../assets/assets";
// import "./DownloadApp.css";

// const DownloadApp = () => {
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollPosition = window.scrollY;
//       if (scrollPosition > 300) {
//         setScrolled(true);
//       } else {
//         setScrolled(false);
//       }
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <>
//       <div className="download-app-container">
//         <div className="download-wrapper">
//           {/* <div className="download-app-heading">
//             Download official <br />
//             League App
//           </div> */}
//           <div className="download-app-inputs">
//             {/* <div className="app-input-controls"> */}
//               {/* <span className="country-code">+91</span>
//               <input type="text" placeholder="Enter Mobile Number" /> */}
//             {/* </div> */}
//             {/* <a href="#" className="get-app-link-btn">Get app link</a> */}
//              <div className= "download-app-desktop">
//         <a
//                 style={{ color: "white", textDecoration: "none" }}
//                 href="download.apk"
//                 download="dream11.apk"
//               >
//           <img src={assets.downloadAppBtn} alt="Download App" />
//         </a>
//       </div>

//           </div>
//         </div>
//       </div>
//       <div className={`download_mobile_app ${scrolled ? "scrolled" : ""}`} >
//         <a
//                 style={{ color: "white", textDecoration: "none" }}
//                 href="download.apk"
//                 download="dream11.apk"
//               >
//           <img src={assets.downloadAppBtn} alt="Download App" />
//         </a>
//       </div>
//     </>
//   );
// };

// export default DownloadApp;
