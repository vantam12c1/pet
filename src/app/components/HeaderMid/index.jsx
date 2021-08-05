import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import "./style.scss";

function HeaderMid(props) {
  const styleImg = {
    width: "20%",
  };
  const styleStrong = {
    fontWeight: "bold",
    color: "#fff",
  };

  const styleCart = {
    fontWeight: "bold",
    textTransform: "uppercase",
    color: "#fff",
  };

  const styleSpan = {
    color: "#777",
    fontSize: "20px",
  };

  const styleSearch = {
    color: "#ffca44",
    fontSize: "20px",
  };

  const styleIconCart = {
    color: "#ffca44",
    fontSize: "20px",
  };
  const styleIconCall = {
    color: "#ffca44",
    fontSize: "20px",
    // marginLeft: "80px",
  };
  return (
    // <div className="header-mid">
    //   <div className="container">
    //     <div className="header-main">
    //       <div className="header-main-list">
    //         <div className="header-main-img">
    //           <img
    //             src="http://mauweb.monamedia.net/petcare/wp-content/uploads/2019/11/Pet-Care-1.png"
    //             style={styleImg}
    //           ></img>
    //         </div>
    //         <ul className="header-main-nav-right">
    //           <li className="header-main-item call">
    //             <p>
    //               <i className="fas fa-phone-volume" style={styleIconCall}></i>
    //               <span style={styleSpan}> Call us</span>
    //               <strong style={styleStrong}> 076 922 0162</strong>
    //             </p>
    //           </li>
    //           <li className="header-main-item cart">
    //             <Link to="/cart" style={styleCart} className="cart-hover">
    //               giỏ hàng / 0₫{" "}
    //               <i
    //                 className="fas fa-cart-arrow-down"
    //                 style={styleIconCart}
    //               ></i>
    //             </Link>
    //           </li>
    //           <li className="header-main-item">
    //             <Link to="#">
    //               {" "}
    //               <i className="fas fa-search" style={styleSearch}></i>
    //             </Link>
    //           </li>
    //         </ul>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="header-mid">
      <div className="grid wide">
        <div className="row navbar-list">
          <div className="col l-5 navbar-left">
            <img
              src="http://mauweb.monamedia.net/petcare/wp-content/uploads/2019/11/Pet-Care-1.png"
              style={styleImg}
            ></img>
          </div>
          <div className="col l-7 navbar-right">
            <ul>
              <li className="call">
                <p>
                  <i
                    className="fas fa-phone-volume icon"
                    style={styleIconCall}
                  ></i>
                  <span style={styleSpan}> Call us</span>
                  <strong style={styleStrong}> 076 922 0162</strong>
                </p>
              </li>
              <li>
                <Link to="/cart" style={styleCart} className="cart-hover">
                  giỏ hàng / 0₫{" "}
                  <i
                    className="fas fa-cart-arrow-down icon"
                    style={styleIconCart}
                  ></i>
                </Link>
              </li>
              <li>
                <Link to="#">
                  {" "}
                  <i className="fas fa-search icon" style={styleSearch}></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderMid;
