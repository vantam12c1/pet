import React from 'react';
import './style.scss';


function HeaderMenu(props) {
    return (
        <div className="header-menu">
            <div className="header-inner">
                <div class="navbar">
                    <a href="#home">Trang Chủ</a>
                    <a href="#news">Giới thiệu</a>
                    <div class="dropdown">
                        
                        <button class="dropbtn">Cửa Hàng
                            <i class="fa fa-caret-down"></i>
                        </button>
                        <div class="dropdown-content">
                            <a href="#">Giỏ Hàng</a>
                            <a href="#">Thanh Toán</a>
                            <a href="#">Kiểm tra đơn hàng</a>
                        </div>
                    </div>
                    <a href="#home">Tin tức</a>
                    <a href="#news">Liên hệ</a>
                </div>
            </div>


        </div>


    );
}

export default HeaderMenu;