import React from "react";
import PropTypes from "prop-types";
import "./style.scss";
ContentTop.propTypes = {};

function ContentTop(props) {
  return (
    <div className="content-top" style={{ marginTop: "20px" }}>
      <div className="content-text">
        <h3
          style={{
            color: "#4f4a4a",
            fontSize: "40px",
          }}
        >
          Vài nét về Pet Care
        </h3>
        <div className="content-text-bot">
          <p
            style={{
              fontSize: "20px",
              color: "#4f4a4a",
            }}
          >
            Mua sản phẩm từ Axiom có nghĩa là giao phó danh tiếng của bạn đến
            một trong những studio web tốt nhất.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ContentTop;
