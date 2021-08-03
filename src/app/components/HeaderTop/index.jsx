import React from 'react';
import './style.scss';

function HeaderTop(props) {
    return (
        <div className="header-top">
            <div className="container">
                <div className="flex">
                    <div className="item" >HOME:319 - C16 Lý Thường Kiệt, P.15, Q.11, Tp.HCM</div>
                    <div className="item" >Open Mon-Fri: 6:30AM to 7PM, Sat: 8AM to 5PM</div>
                    <div className="item" >info@themerex.ne</div>
                    <div className="item" >Đăng ký/Đăng nhập</div>
                </div>
            </div>
        </div>
    );
}

export default HeaderTop;