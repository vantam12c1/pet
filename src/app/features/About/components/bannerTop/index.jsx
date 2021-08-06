import React from "react";
import PropTypes from "prop-types";
import "./style.scss";
BannerTop.propTypes = {};

function BannerTop(props) {
  const style = {
    width: "100%",
    objectFit: "cover",
    backgroundImage:
      "url(http://mauweb.monamedia.net/petcare/wp-content/uploads/2019/10/home_top2.png)",
    backgroundRepeat: "no-repeat",
  };
  return (
    <div className="banner-top">
      <div className="bg__img" style={style}></div>
      <div className="text-center">
        <h2 className="text-top">Axiom yêu khách hàng của họ</h2>
        <p
          className="text-bot"
          style={{
            fontWeight: "bold",
          }}
        >
          Đó là lý do tại sao chúng tôi tạo ra các thiết kế sáng sủa, bắt mắt và
          làm cao cấp mã chất lượng để bạn quá hài lòng với các sản phẩm của
          chúng tôi.
        </p>
      </div>
    </div>
  );
}

export default BannerTop;
