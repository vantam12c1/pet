import React from "react";
import PropTypes from "prop-types";
import "./style.scss";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
  Redirect,
} from "react-router-dom";

ContactHeader.propTypes = {};

function ContactHeader(props) {
  return (
    <div className="header-content">
      <h1 className="text-contact"> liên hệ</h1>
      <div className="breadcrumb">
        <Link to="/">
          <p className="home-breadcrumb" style={{ color: "#f1f1f1" }}>
            trang chủ
          </p>
        </Link>
        <span>/ </span>
        <p className="contact-breadcrumb" style={{ color: "#fff" }}>
          liên hệ
        </p>
      </div>
    </div>
  );
}

export default ContactHeader;
