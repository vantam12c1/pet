import React from 'react';
import { NavLink, Link } from "react-router-dom";
import './style.scss';

function HeaderMenu(props) {
  return (
    <div className="header-menu">
      <div className="container">
        <div className="navbar">
          <ul className="menu__list">
            <li className="menu-item">
              <NavLink to="/" exact>
                trang chủ
              </NavLink>
            </li>
            <li className="menu-item">
              <NavLink to="/about" exact>
                giới thiệu
              </NavLink>
            </li>
            <li className="menu-item dropdown">
              <NavLink  to="/store" exact className="dropbtn">
                cửa hàng <i className="fas fa-chevron-down"></i>
              </NavLink>            
              <ul className="dropdown-content">
                <li>
                  <Link to="#">Giỏ hàng </Link>
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
              <NavLink to="/news" exact>                
                tin tức
              </NavLink>
            </li>
            <li className="menu-item">
              <NavLink to="/contact" exact>                
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
