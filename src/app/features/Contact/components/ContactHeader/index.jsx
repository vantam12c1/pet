import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";

function ContactHeader(props) {
  return (
    <div className="header-content">
      <h1 className="text-contact"> liên hệ</h1>
      <div className="breadcrumb">
        <Link to="/">
          <p className="home-breadcrumb">trang chủ</p>
        </Link>
        <span>/ </span>
        <p className="contact-breadcrumb">liên hệ</p>
      </div>
    </div>
  );
}

export default ContactHeader;
