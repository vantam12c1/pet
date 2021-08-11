import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/images/Pet-Care-1.png";
import "./style.scss";

function HeaderMid(props) {
  return (
    <div className="header-mid">
      <div className="grid wide header-mid-wrapper">
        <div className="row navbar__mid">
          <div className="col l-5 navbar__mid--left">
            <div className="navbar__logo">
              <Link to="/">
                <img
                  src={logo}
                  alt="Logo"
                  className="logo"
                  style={{ width: "20%" }}
                />
              </Link>
            </div>
          </div>
          <div className="col l-7 navbar__mid--right">
            <ul className="navbar__right--list">
              <li className="navbar__right--item call">
                <p>
                  <span className="icon">
                    <i className="fas fa-phone-volume"> </i>
                  </span>
                  <span className="txt-call"> Call us</span>
                  <span className="txt-hot-line"> 076 922 0162</span>
                </p>
              </li>
              <li className="navbar__right--item cart">
                <Link to="/cart" className="hover-cart">
                  <span>giỏ hàng / 0₫ </span>
                  <span className="icon">
                    <i className="fas fa-cart-arrow-down"></i>
                  </span>
                </Link>
              </li>
              <li className="navbar__right--item search dropdown-search">
                <Link to="#">
                  <span className="icon dropdown-icon">
                    <i className="fas fa-search"></i>
                  </span>
                </Link>
                <ul className="dropdown-content-search">
                  <li className="noidung__dropdown">
                    <form>
                      <input
                        type="search"
                        placeholder="Tìm kiếm....."
                        className="input-search"
                      ></input>
                      <Link to="#" type="button" className="btn-search">
                        <i
                          className="fas fa-search"
                          style={{ fontSize: "20px" }}
                        ></i>
                      </Link>
                    </form>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderMid;
