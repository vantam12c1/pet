import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./style.scss";
HomeVoucher.propTypes = {};

function HomeVoucher(props) {
  return (
    <div className="grid wide home-voucher-wrapper">
      <div className="row home-voucher-list">
        <div className="col l-6 home-voucher-item item-left">
          <div className="shipping">
            <Link to="#" className="link-left">
              <h2>Giảm thêm 40%</h2>
              <p>trên hóa đơn $100,sử dụng mã giảm giá</p>
            </Link>
          </div>
        </div>
        <div className="col l-6 home-voucher-item item-right">
          <div className="shipping">
            <Link to="#" className="link-right">
              <h2>Miễn phí ship</h2>
              <p>trên hóa đơn $49~có giới hạn</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeVoucher;
