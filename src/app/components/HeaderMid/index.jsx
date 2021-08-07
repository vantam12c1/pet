import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/images/Pet-Care-1.png";
import "./style.scss";

function HeaderMid(props) {
  return (
    <div className="header-mid">
      <div className="grid wide">
        <div className="row navbar-list">
          <div className="col l-5 navbar-left">
            <Link to="/">
              <img className="logo" src={logo} />
            </Link>
          </div>
          <div className="col l-7 navbar-right">
            <ul>
              <li className="call">
                <p>
                  <span className="icon">
                    <i className="fas fa-phone-volume"></i>
                  </span>
                  <span>Call us</span>
                  <span>076 922 0162</span>
                </p>
              </li>
              <li className="cart">
                <Link to="/cart" className="cart-hover">
                  <span>giỏ hàng / 0₫</span>
                  <span className="icon">
                    <i className="fas fa-cart-arrow-down"></i>
                  </span>
                </Link>
              </li>
              <li className="dropdown-search">
                <Link to="#">
                  <span className="icon">
                    <i className="fas fa-search"></i>
                  </span>
                </Link>
                <ul className="dropdown-content-search">
                  <li className="content-dropdown">
                    <input
                      type="search"
                      placeholder="Tìm kiếm....."
                      className="in-search"
                    ></input>
                    <Link to="#" type="button" className="btn-search">
                      <i class="fas fa-search" style={{ fontSize: "20px" }}></i>
                    </Link>
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
