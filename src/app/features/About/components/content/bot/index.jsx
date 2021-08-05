import React from "react";
import PropTypes from "prop-types";
import "./style.scss";
ContentBot.propTypes = {};

function ContentBot(props) {
  return (
    <div className="content-bot" style={{ marginTop: "20px" }}>
      <div className="grid wide">
        <div className="row content-bot-list">
          <div className="col l-4 content-bot-item">
            <ul style={{ listStyle: "none" }}>
              <li>
                <i
                  className="fas fa-arrow-right icon"
                  style={{ fontSize: "50px" }}
                ></i>
              </li>
              <li>
                <p style={{ fontWeight: "bold", fontSize: "20px" }}>
                  Phù hợp cho bất kì mục đích nào
                </p>
              </li>
              <li>
                <p style={{ color: "rgb(79, 74, 74)" }}>
                  Công ty Axiom thực hiện công việc của mình với một khách hàng,
                  chúng tôi đảm bảo rằng chủ đề Thú cưng sẽ là bất kỳ loại trang
                  web nào bạn muốn.
                </p>
              </li>
            </ul>
          </div>
          <div className="col l-4 content-bot-item ">
            <ul style={{ listStyle: "none" }}>
              <li>
                <i
                  className="fas fa-print icon"
                  style={{ fontSize: "50px" }}
                ></i>
              </li>
              <li>
                <p style={{ fontWeight: "bold", fontSize: "20px" }}>
                  Đáp ứng 100%
                </p>
              </li>
              <li>
                <p style={{ color: "rgb(79, 74, 74)" }}>
                  Thú cưng sẽ tự động được điều chỉnh theo bất kỳ độ phân giải
                  nào mà bạn không phải lo lắng về việc tạo phiên bản cho mỗi
                  màn hình.
                </p>
              </li>
            </ul>
          </div>
          <div className="col l-4 content-bot-item">
            <ul style={{ listStyle: "none" }}>
              <li>
                <i
                  className="far fa-paper-plane icon"
                  style={{ fontSize: "50px" }}
                ></i>
              </li>
              <li>
                <p style={{ fontWeight: "bold", fontSize: "20px" }}>
                  Phù hợp cho bất kì mục đích nào
                </p>
              </li>
              <li>
                {" "}
                <p style={{ color: "rgb(79, 74, 74)" }}>
                  Chúng tôi tạo ra các chủ đề của chúng tôi với suy nghĩ của
                  khách hàng, do đó nhóm của chúng tôi làm việc chăm chỉ để cung
                  cấp cho bạn sự hỗ trợ kỹ thuật tốt nhất trên thế giới.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContentBot;
