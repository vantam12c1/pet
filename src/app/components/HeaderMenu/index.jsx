import React from 'react';
import { BrowserRouter as Router, Switch,  Route,  Link } from "react-router-dom";
import './style.scss';




function HeaderMenu(props) {
    return (
      
            <div className="header-menu">
                <div className="header-inner">
                <div class="navbar">
                        <Link to="/home">Trang Chủ</Link>
                        <Link to="/news">Giới thiệu</Link>
                        <div class="dropdown">
                            <button class="dropbtn">Cửa Hàng
                                <i class="fa fa-caret-down"></i>
                            </button>
                            <div class="dropdown-content">
                                <Link to="/">Giỏ Hàng</Link>
                                <Link to="/">Thanh Toán</Link>
                                <Link to="/">Kiểm tra đơn hàng</Link>
                            </div>
                        </div>
                        <Link to="/home">Tin tức</Link>
                        <Link to="/contact">Liên Hệ</Link>
                    </div>
                   
                </div>
            </div>
        

    );
}

export default HeaderMenu;