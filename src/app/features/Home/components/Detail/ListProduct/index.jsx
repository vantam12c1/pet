import React, { useState } from "react";
import PropTypes from "prop-types";
import HeaderDetail from "../../Detail/HeaderDetail";
import "./style.scss";
import { Link } from "react-router-dom";
import FooterDetail from "../FooterDetail";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/thumbs/thumbs.min.css";
// import Swiper core and required modules
import SwiperCore, { Navigation, Thumbs } from "swiper/core";

// install Swiper modules
SwiperCore.use([Navigation, Thumbs]);

ListProduct.propTypes = {};

function ListProduct({ listProduct, data, array }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const shaDow = {
    boxShadow: "0px 0px 5px 0px rgb(0 0 0 / 10%)",
  };
  const txtHover = {
    boxShadow: "inset 0 -1.8em 1em 0 rgb(0 0 0 / 0%)",
  };
  console.log(data.list_pagination_img);
  return (
    <div className="header-detail">
      <div className="grid wide header-detail-wrapper">
        <div className="row header-detail-list">
          <div className="col l-3 header-detail-item left">
            <aside className="product-sidebar" style={shaDow}>
              <span className="txt-pro">Sản phẩm</span>
              {listProduct.map((val) => (
                <HeaderDetail
                  key={val.id}
                  product={val.product}
                  title={val.title}
                  price={val.price}
                  image={val.poster}
                  slug={val.key}
                />
              ))}
            </aside>
            <br />
            <aside className="product-sidebar" style={shaDow}>
              <span className="txt-pro">Sản phẩm</span>
              {listProduct.map((val) => (
                <HeaderDetail
                  key={val.id}
                  product={val.product}
                  title={val.title}
                  price={val.price}
                  image={val.poster}
                  slug={val.key}
                />
              ))}
            </aside>
          </div>
          <div className="col l-9 header-detail-item right">
            <div className="row">
              <div className="col l-6 product-image">
                <div className="flickity-slider ">
                  <Swiper
                    style={{
                      "--swiper-navigation-color": "#000",
                      "--swiper-pagination-color": "#000",
                    }}
                    spaceBetween={10}
                    navigation={true}
                    thumbs={{ swiper: thumbsSwiper }}
                    className="mySwiper2"
                  >
                    {data.list_pagination_img?.map((item, i) => {
                      return (
                        <SwiperSlide>
                          <img key={i} src={item} className="poster-thumnail" />
                        </SwiperSlide>
                      );
                    })}
                  </Swiper>
                  <Swiper
                    onSwiper={setThumbsSwiper}
                    spaceBetween={10}
                    slidesPerView={4}
                    freeMode={true}
                    watchSlidesVisibility={true}
                    watchSlidesProgress={true}
                    className="mySwiper"
                  >
                    {data.list_pagination_img?.map((item, i) => {
                      return (
                        <SwiperSlide>
                          <img key={i} src={item} className="poster-thumnail" />
                        </SwiperSlide>
                      );
                    })}
                  </Swiper>
                </div>
              </div>
              <div className="col l-6 product-info">
                <div className="title-wrapper" style={{ textAlign: "left" }}>
                  <nav className="breadcrumb">
                    <Link to="/">Trang chủ</Link>
                    <span> / </span>

                    <Link to="#">{data.cate ? data.cate[0] : ""}</Link>
                  </nav>
                  <h1>{data.title}</h1>
                </div>
                <div className="divider"></div>
                <p className="price">{data.price?.displayAmount}</p>
                <div className="short-desc-wrapper">
                  <p
                    className="short_desc"
                    style={{ textAlign: "justify", fontSize: "17px" }}
                  >
                    {data.short_desc}
                  </p>
                </div>

                <div className="btn-add-wrapper">
                  <input
                    type="button"
                    className="btn-minus is-form"
                    value="-"
                  />
                  <input
                    type="number"
                    step="1"
                    max="9999"
                    value="1"
                    inputMode="numberic"
                    className="input-txt"
                    style={{ txtHover }}
                  />
                  <input type="button" className="btn-add is-form" value="+" />
                  <div className="btn-add-to-cart">
                    <button type="submit" className="btn-cart">
                      mua hàng
                    </button>
                  </div>
                </div>
                <div className="row row-small">
                  <div
                    className="col l-6 text-left"
                    style={{ textAlign: "left" }}
                  >
                    <p>
                      <strong>Tính phí ship tự động</strong>
                    </p>
                    <div className="grid-ship-wrapper">
                      <div className="grid-item">
                        <img src="http://mauweb.monamedia.net/petcare/wp-content/uploads/2018/10/logo-ghn.jpg" />
                      </div>
                      <div className="grid-item">
                        <img src="http://mauweb.monamedia.net/petcare/wp-content/uploads/2018/10/logo-ghtk.jpg" />
                      </div>
                      <div className="grid-item">
                        <img src="http://mauweb.monamedia.net/petcare/wp-content/uploads/2018/10/logo-ninja-van.jpg" />
                      </div>
                      <div className="grid-item">
                        <img src="http://mauweb.monamedia.net/petcare/wp-content/uploads/2018/10/logo-shipchung.jpg" />
                      </div>
                      <div className="grid-item">
                        <img src="http://mauweb.monamedia.net/petcare/wp-content/uploads/2018/10/logo-viettle-post.jpg" />
                      </div>
                      <div className="grid-item">
                        <img src="http://mauweb.monamedia.net/petcare/wp-content/uploads/2018/10/logo-vn-post.jpg" />
                      </div>
                    </div>
                  </div>
                  <div
                    className="col l-6 text-right"
                    style={{ textAlign: "left" }}
                  >
                    <p>
                      <strong>Thanh toán</strong>
                    </p>
                    <div className="grid-payment-wrapper">
                      <div className="grid-item">
                        <img src="http://mauweb.monamedia.net/petcare/wp-content/uploads/2018/10/logo-acb.jpg" />
                      </div>
                      <div className="grid-item">
                        <img src="http://mauweb.monamedia.net/petcare/wp-content/uploads/2018/10/logo-techcombank.jpg" />
                      </div>
                      <div className="grid-item">
                        <img src="http://mauweb.monamedia.net/petcare/wp-content/uploads/2018/10/logo-vib.jpg" />
                      </div>
                      <div className="grid-item">
                        <img src="http://mauweb.monamedia.net/petcare/wp-content/uploads/2018/10/logo-vcb.jpg" />
                      </div>
                      <div className="grid-item">
                        <img src="http://mauweb.monamedia.net/petcare/wp-content/uploads/2018/10/logo-paypal.jpg" />
                      </div>
                      <div className="grid-item">
                        <img src="http://mauweb.monamedia.net/petcare/wp-content/uploads/2018/10/logo-mastercard.jpg" />
                      </div>
                    </div>
                  </div>
                  <div className="col l-12 text-affi">
                    <p>
                      "Hãy trở thành Affilicate của chúng tôi để tìm thêm thu
                      nhập thụ động, kiếm tiền online"
                    </p>
                    <div className="register-affi">
                      <Link to="#" className="btn-register-affi">
                        Đăng ký Affilicate
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="product-cate" style={{ textAlign: "left" }}>
                  <p>
                    Danh mục :{" "}
                    <Link to="#">{data.cate ? data.cate[0] : ""}</Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="product-footer">
              <FooterDetail val={data} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
<div></div>;
export default ListProduct;
