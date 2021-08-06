import React from "react";
import PropTypes from "prop-types";
import "./style.scss";
BannerBot.propTypes = {};

function BannerBot(props) {
  return (
    <div className="banner-bot" style={{ backgroundColor: "#9bba1d" }}>
      <div className="grid wide">
        <div className="row">
          <div
            className="col l-6 content-banner-bot"
            style={{ marginTop: "100px" }}
          >
            <ul style={{ listStyle: "none", textAlign: "center" }}>
              <p style={{ color: "#e4e8d0" }}>
                CHÚNG TÔI LÀ AI,CHÚNG TÔI LÀM GÌ
              </p>
              <li>
                <h2 className="about-us">Chúng tôi là ai</h2>
              </li>
              <li>
                <p style={{ color: "#fff" }}>
                  Mua sản phẩm web từ công ty Axiom có nghĩa là giao phó danh
                  tiếng của bạn cho một trong những studio web tốt nhất trong
                  lĩnh vực này. Nhóm của chúng tôi tạo ra các chủ đề của chúng
                  tôi với suy nghĩ của khách hàng, do đó bộ óc sáng tạo của
                  chúng tôi làm việc chăm chỉ để cung cấp cho bạn sự hỗ trợ kỹ
                  thuật tốt nhất trên toàn thế giới.
                </p>
              </li>
              <li>
                <button className="btn-more">
                  <span>NHIỀU HƠN</span>
                </button>
              </li>
            </ul>
          </div>
          <div className="col l-6 banner-img-bot">
            <div className="imge">
              <img
                src="http://mauweb.monamedia.net/petcare/wp-content/uploads/2019/10/main_right.jpg"
                style={{ width: "100%", objectFit: "cover" }}
              ></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BannerBot;
