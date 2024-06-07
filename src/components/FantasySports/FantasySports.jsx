import { fantasySports } from "../../assets/assets";
import "./FantasySports.css";
import Sports from "./Sports";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const FantasySports = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="fantasy-sports-section">
      {/* <div className="container">
        <div className="heading">
          Popular <span>Fantasy Sports</span> in India
        </div>
        <p className="text-center">
          Fantasy sports is a platform for online gaming where fantasy players
          create a virtual team of real sports players. Leagues gives you plenty
          of options to create your fantasy sports team for the sport you would
          like to play and win! Here are the most popular fantasy sports leagues
          to play.
        </p>
        <div className="fantasy-sport-slider">
          <Slider {...settings}>
            {fantasySports.map((sports) => (
              <Sports key={sports.id} {...sports} />
            ))}
          </Slider>
        </div>
      </div> */}
    </section>
  );
};

export default FantasySports;
