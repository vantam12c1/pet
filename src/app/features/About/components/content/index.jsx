import React from "react";
import PropTypes from "prop-types";
import ContentTop from "./top";
import ContentBot from "./bot";

Content.propTypes = {};

function Content(props) {
  return (
    <div className="content">
      <div className="top">
        <ContentTop />
      </div>
      <div className="bot">
        <ContentBot />
      </div>
    </div>
  );
}

export default Content;
