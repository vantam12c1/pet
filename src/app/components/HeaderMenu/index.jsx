import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./style.scss";

function HeaderMenu(props) {
  return (
    <div className="header-menu">
      <div className="container">
        <div className="navbar">
          <ul className="menu__list">
            <li className="menu-item">
              <NavLink to="/" exact activeStyle={{ color: "#ff5440" }}>
                trang chủ
              </NavLink>
            </li>
            <li className="menu-item">
              <NavLink to="/about" exact activeStyle={{ color: "#ff5440" }}>
                giới thiệu
              </NavLink>
            </li>
            <li className="menu-item dropdown">
              <NavLink
                to="/store"
                exact
                className="dropbtn"
                activeStyle={{ color: "#ff5440" }}
              >
                cửa hàng <i className="fas fa-chevron-down"></i>
              </NavLink>
              <ul className="dropdown-content">
                <li>
                  <Link to="/cart">Giỏ hàng </Link>
                </li>
                <li>
                  <Link to="#">Thanh toán</Link>
                </li>
                <li>
                  <Link to="#">Kiểm tra đơn hàng</Link>
                </li>
              </ul>
            </li>
            <li className="menu-item">
              <NavLink to="/news" exact activeStyle={{ color: "#ff5440" }}>
                tin tức
              </NavLink>
            </li>
            <li className="menu-item">
              <NavLink to="/contact" exact activeStyle={{ color: "#ff5440" }}>
                liên hệ
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default HeaderMenu;
