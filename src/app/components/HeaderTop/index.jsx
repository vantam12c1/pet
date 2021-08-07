import React from "react";
import "../../features/Auth/Login";
import "./style.scss";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
  Redirect,
} from "react-router-dom";
import LoginForm from "../../features/Auth/Login";
import SignUpForm from "../../features/Auth/Register";

function HeaderTop(props) {
  const styleStrong = {
    fontWeight: "bold",
  };

  return (
    <div className="header-top">
      <div className="container">
        <div className="flex">
          <div className="item">
            <strong style={styleStrong}>
              {" "}
              <i
                className="fas fa-home"
                style={{
                  fontSize: "20px",
                  fontWeight: "bold",
                }}
              ></i>
              HOME
            </strong>
            :319 - C16 Lý Thường Kiệt, P.15, Q.11, Tp.HCM
          </div>
          <div className="item">
            <i
              className="far fa-clock"
              style={{
                fontSize: "20px",
              }}
            >
              {" "}
            </i>{" "}
            Open Mon-Fri: 6:30AM to 7PM, Sat: 8AM to 5PM
          </div>
          <div className="item">
            {" "}
            <i
              className="fas fa-envelope-open-text"
              style={{
                fontSize: "20px",
              }}
            ></i>{" "}
            info@themerex.ne
          </div>
          <div className="item">
            <i
              className="fas fa-arrow-right"
              style={{
                fontSize: "25px",
                fontWeight: "bold",
              }}
            ></i>{" "}
            {/* <Route path="/login" component={LoginForm}></Route> */}
            <Link to="/login">Login</Link>
            <span> /</span>
            <Link to="/register"> Register</Link>
          </div>
        </div>
      </div>
    </div>
    // <div className="header-top">
    //   <div className="grid wide">
    //     <div className="row header-top-list">
    //       <div className="col l-3 header-top-item">
    //         <strong
    //           style={styleStrong}
    //           style={{ color: " rgb(108, 100, 101)" }}
    //         >
    //           <i
    //             className="fas fa-home"
    //             style={{
    //               fontSize: "20px",
    //               fontWeight: "bold",
    //               color: " rgb(108, 100, 101)",
    //             }}
    //           ></i>
    //           HOME
    //         </strong>
    //         <p
    //           style={{
    //             color: " rgb(108, 100, 101)",
    //           }}
    //         >
    //           :319 - C16 Lý Thường Kiệt, P.15, Q.11, Tp.HCM
    //         </p>
    //       </div>
    //       <div className="col l-3 header-top-item"></div>
    //       <div className="col l-3 header-top-item"></div>
    //       <div className="col l-3 header-top-item"></div>
    //     </div>
    //   </div>
    // </div>
  );
}

export default HeaderTop;
