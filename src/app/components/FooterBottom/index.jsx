import React from "react";

import { Link } from "react-router-dom";
import "./style.scss";
FooterBottom.propTypes = {};

function FooterBottom(props) {
  return (
    <div className="footer-bottom">
      <p>
        © Bản quyền thuộc về . Thiết kế website
        <img src="https://mona.solutions/logo.png" />
        <Link to="/">
          <strong>Monda Media</strong>
        </Link>
      </p>
    </div>
  );
}

export default FooterBottom;
