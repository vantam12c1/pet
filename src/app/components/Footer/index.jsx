import React from "react";
import FooterTop from "../FooterTop";
// import 2 folder footer
import FooterBottom from "../FooterBottom";
function Footer(props) {
  const bg = {
    backgroundColor: "rgb(48 32 33 / 85%) ",
    paddingTop: "40px",
    paddingBottom: "40px",
  };
  return (
    <footer className="footer">
      <div style={bg}>
        <FooterTop />
      </div>
      <div>
        <FooterBottom />
      </div>
    </footer>
  );
}

export default Footer;
