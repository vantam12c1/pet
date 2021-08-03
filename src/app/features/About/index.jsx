import React from "react";
import BannerBot from "./components/bannerBottom";
import BannerTop from "./components/bannerTop";
import Content from "./components/content";

function AboutFeature(props) {
  return (
    <div className="about">
      <div className="banner-top">
        <BannerTop />
      </div>
      <div className="content">
        <Content />
      </div>
      <div className="banner-bot">
        <BannerBot />
      </div>
    </div>
  );
}

export default AboutFeature;
