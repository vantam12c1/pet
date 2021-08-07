import React from "react";
import PropTypes from "prop-types";
import "./style.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
FooterTop.propTypes = {};

function FooterTop(props) {
  const styleImage = {
    width: "30%",
    objectFit: "cover",
  };

  return (
    <div className="grid wide">
      <div className="row">
        <div className="col l-3 logo__footer">
          <div className="logo__footer--image text-header">
            <img
              src="http://mauweb.monamedia.net/petcare/wp-content/uploads/2019/11/Pet-Care-1.png"
              style={styleImage}
            ></img>
          </div>
          <ul className="text-logo">
            <li>
              <p>Đăng ký để nhận được được thông tin mới nhất từ chúng tôi.</p>
            </li>
            <li>
              <div className="button-search">
                <input type="text" placeholder="Email...." />
                <button type="submit" className="btn-submit">
                  <i className="fa fa-paper-plane"></i>
                </button>
              </div>
            </li>
          </ul>
        </div>
        <div className="col l-3 contact__footer">
          <ul className="text-contact">
            <div className="text-header">
              <h3>Liên hệ</h3>
            </div>
            <li>
              <p>319 C16 Lý Thường Kiệt, Phường 15, Quận 11, Tp.HCM</p>
            </li>
            <li>
              <p>076 922 0162</p>
            </li>
            <li>
              <p>demonhunterg@gmail.com mon@mona.media</p>
            </li>
            <li>
              <p>demonhunterp</p>
            </li>
          </ul>
        </div>
        <div className="col l-3 help__footer">
          <ul className="text-help">
            <div className="text-header">
              <h3>Hỗ trợ</h3>
            </div>
            <li>
              <Link to="#">FAQ</Link>
            </li>
            <li>
              <Link to="#">Chăm sóc khách hàng</Link>
            </li>
            <li>
              <Link to="#">Vận chuyển và đổi trả hàng </Link>
            </li>
            <li>
              <Link to="/contact">Liên hệ</Link>
            </li>
          </ul>
        </div>
        <div className="col l-3 info__footer">
          <ul className="text-info">
            <div className="text-header">
              <h3>Thông tin</h3>
            </div>
            <li>
              <p>
                Trong những năm tới, người nostrud tập thể dục, khu học chánh có
                thể không hoạt động aliquip.
              </p>
            </li>
            <li>
              <div>
                <Link to="#"></Link>
                <Link to="#"></Link>
                <Link to="#"></Link>
                <Link to="#"></Link>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default FooterTop;
