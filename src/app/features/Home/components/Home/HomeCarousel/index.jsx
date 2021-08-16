import React from "react";
import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";

import "./style.scss";

import { Link } from "react-router-dom";

// import Swiper core and required modules
import SwiperCore, { Navigation } from "swiper/core";

// install Swiper modules
SwiperCore.use([Navigation]);

HomeCarousel.propTypes = {};

function HomeCarousel(props) {
  return (
    <>
      <Swiper navigation={true} className="mySwiper">
        <SwiperSlide className="first-carousel">
          <div className="banner-carousel">
            <div className="banner-carousel-list-first">
              <div className="banner-carousel-first">
                <div className="fade-in-left first">
                  <img
                    className="sale-up"
                    src="http://mauweb.monamedia.net/petcare/wp-content/uploads/2019/11/sale-30-150x150.png"
                  />
                </div>
                <div className="fade-in-right second">
                  <div className="text-list">
                    <h3 className="txt-new-year">Năm mới 2020</h3>
                    <h2 className="txt-save">Tiết kiệm năm mới</h2>
                    <p>Tiết kiệm cho những quan trọng của bạn</p>
                    <p className="online" style={{ fontWeight: "bold" }}>
                      Tại cửa hàng và trực tuyến
                    </p>
                    <Link to="#" className="btn-start">
                      bắt đầu
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="second-carousel">
          <div className="banner-carousel">
            <div className="banner-carousel-list-second">
              <div className="banner-carousel-second">
                <div className="fade-in-right second">
                  <img
                    className="sale-up"
                    src="http://mauweb.monamedia.net/petcare/wp-content/uploads/2019/11/sale-30-150x150.png"
                  />
                </div>
                <div className="fade-in-left second">
                  <div className="text-list">
                    <h3 className="txt-purchase">Mua hàng Online</h3>
                    <h2 className="txt-save">Tiết kiệm tiền</h2>
                    <p>Tiết kiệm cho những quan trọng của bạn</p>
                    <p className="online" style={{ fontWeight: "bold" }}>
                      Tại cửa hàng và trực tuyến
                    </p>
                    <Link to="#" className="btn-start">
                      bắt đầu
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default HomeCarousel;
