import React from "react";
import "./style.scss";
import { FaMapMarker, FaPhoneAlt, FaMailBulk, FaSkype } from "react-icons/fa";
import { withGoogleMap, withScriptjs, GoogleMap } from "react-google-maps";
import { GrDiamond } from "react-icons/gr";
import Map from "./Map";

function ContactFeature(props) {
  const key = "AIzaSyA8KMc18WWbjQk5CGjG5zBAjM4Q_KuXe00";
  return (
    <div>
      <div className="Contact-Header">
        <div className="Contact-Header-Collum">
          <div className="Contact-title">
            <strong>
              <h1>LIÊN HỆ</h1>
            </strong>
            <br />
            TRANG CHỦ / <strong>LIÊN HỆ</strong>
          </div>
        </div>
      </div>
      <div className="Contact-Body">
        <div className="contact-all">
          {/* GoogleMap */}
          <Map
            googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${key}&callback=initMap`}
            loadingElement={<div style={{ height: `90%` }} />}
            containerElement={<div style={{ height: `90%`, margin: `auto` }} />}
            mapElement={<div style={{ height: `90%` }} />}
          />
        </div>
        <div className="contact-all">
          <div className="contact-info">
            <img
              src="http://mauweb.monamedia.net/petcare/wp-content/uploads/2018/04/logo-mona.png"
              alt=""
              className="contact-avatar"
            />
            <div className="contact-user-top">
              <div className="contact-info-detail">
                {/* username */}
                <a>
                  {" "}
                  <FaMapMarker />
                  &ensp; 319 C16 Lý Thường Kiệt, Phường 15, Quận 11, Tp.HCM{" "}
                </a>
                <br />
                <a>
                  {" "}
                  <FaPhoneAlt />
                  &ensp; 076 922 0162
                </a>
                <br />
                <a>
                  {" "}
                  <FaMailBulk />
                  &ensp; demonhunterg@gmail.com
                </a>
                <br />
                <a>&ensp;&ensp;&ensp;&ensp;mon@mona.media</a>
                <br />
                <a>
                  {" "}
                  <FaSkype />
                  &ensp; demonhunterp
                </a>
              </div>
            </div>
          </div>
          <div className="contact-title">
            <h2>
              <strong>LIÊN HỆ VỚI CHÚNG TÔI</strong>
            </h2>
            <br />
            <div className="icon-title">
              <GrDiamond />
            </div>
          </div>
          <div className="contact-form">
            {/* <Footer> */}
            <form>
              <input
                className="textform"
                type="text"
                name="name"
                placeholder="Họ và tên"
              />
              <input
                className="textform"
                type="email"
                name="name"
                placeholder="Email"
              />
              <input
                className="textform"
                type="text"
                name="name"
                placeholder="Số điện thoại"
              />
              <input
                className="textform"
                type="text"
                name="name"
                placeholder="Địa chỉ"
              />
              <textarea
                className="textform-big"
                type="text"
                name="name"
                placeholder="Lời nhắn"
              />
              <input className="submit" type="submit" value="Gửi" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactFeature;
