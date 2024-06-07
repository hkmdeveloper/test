import "./Banner.css";
import { bannerSlide, bannerSlideMobile } from "../../assets/assets";
import { useState, useEffect } from "react";
import DownloadApp from "../DownloadApp/DownloadApp";

const Banner = () => {
  const [count, setCount] = useState(0);
  const [currentWidth, setCurrentWidth] = useState(window.innerWidth);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCount((count + 1) % bannerSlide.length);
    }, 4000);
    return () => clearTimeout(timer);
  }, [count, bannerSlide.length]);

  useEffect(() => {
    const handleResize = () => setCurrentWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleDotClick = (index) => {
    setCount(index);
  };

  return (
    <section className="banner-section">
      {currentWidth > 480 ? (
        bannerSlide.map((item, index) => (
          <div
            key={item.id}
            style={{ display: count === index ? "block" : "none" }}
          >
            <div className="banner-item">
              <div className="banner-img">
                <img src={item.img} alt="banner" />
              </div>
            </div>
          </div>
        ))
      ) : (
        bannerSlideMobile.map((item, index) => (
          <div
            key={item.id}
            style={{ display: count === index ? "block" : "none" }}
          >
            <div className="banner-item">
              <div className="banner-img">
                <img src={item.img} alt="banner" />
              </div>
            </div>
          </div>
        ))
      )}
      <div className="slide-dots">
        {bannerSlide.map((dot, index) => (
          <span
            onClick={() => handleDotClick(index)}
            key={dot.id}
            className={`dot-indicator ${count === index ? "active" : ""}`}
          ></span>
        ))}
      </div>
      <DownloadApp />
    </section>
  );
};

export default Banner;







// import "./Banner.css";
// import { bannerSlide, bannerSlideMobile } from "../../assets/assets";
// import { useState, useEffect } from "react";
// import DownloadApp from "../DownloadApp/DownloadApp";

// const Banner = () => {
//   const [count, setCount] = useState(0);
//   const [currentWidth, setCurrentWidth] = useState(window.innerWidth);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setCount((count + 1) % bannerSlide.length);
//     }, 4000);
//     return () => clearTimeout(timer);
//   }, [count, bannerSlide.length]);

//   useEffect(() => {
//     const handleResize = () => setCurrentWidth(window.innerWidth);
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   const handleDotClick = (index) => {
//     setCount(index);
//   };

//   return (
//     <section className="banner-section">
//       {currentWidth > 480 ? (
//         bannerSlide.map((item, index) => (
//           <div
//             key={item.id}
//             style={{ display: count === index ? "block" : "none" }}
//           >
//             <div className="banner-item">
//               <div className="banner-img">
//                 <img src={item.img} alt="banner" />
//               </div>
//             </div>
//           </div>
//         ))
//       ) : (
//         bannerSlideMobile.map((item, index) => (
//           <div
//             key={item.id}
//             style={{ display: count === index ? "block" : "none" }}
//           >
//             <div className="banner-item">
//               <div className="banner-img">
//                 <img src={item.img} alt="banner" />
//               </div>
//             </div>
//           </div>
//         ))
//       )}
//       <div className="slide-dots">
//         {bannerSlide.map((dot, index) => (
//           <span
//             onClick={() => handleDotClick(index)}
//             key={dot.id}
//             className={`dot-indicator ${count === index ? "active" : ""}`}
//           ></span>
//         ))}
//       </div>
//       <DownloadApp />
//     </section>
//   );
// };

// export default Banner;
