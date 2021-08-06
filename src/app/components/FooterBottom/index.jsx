import React from "react";
import PropTypes from "prop-types";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./style.scss";
FooterBottom.propTypes = {};

function FooterBottom(props) {
  const styleImage = {
    width: "2%",
    objectFit: "cover",
  };

  return (
    <div className="footer-bottom">
      <p>
        © Bản quyền thuộc về . Thiết kế website
        <img src="https://mona.solutions/logo.png" style={styleImage} />
        <Link to="/">
          <strong>Monda Media</strong>
        </Link>
      </p>
    </div>
  );
}

export default FooterBottom;
