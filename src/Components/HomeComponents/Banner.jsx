import React from "react";
import bannerImg from "../../assets/banner.jpg";
function Banner() {
  return (
    <div className="hero  ">
      <div className="hero-content text-center">
        <img className="rounded-lg " src={bannerImg} alt="" />
      </div>
    </div>
  );
}

export default Banner;
