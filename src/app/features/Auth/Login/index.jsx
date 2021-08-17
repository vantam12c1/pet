import React, {useState} from 'react';
import { Link } from "react-router-dom";
import './style.scss';

function LoginForm() {
    return (
      <div className="login">
      
        <div className="login-wrapper main">
          <h1 className="sign">Please Log In</h1>
          <form>
            <label>
              {/* <p>Username</p> */}
              <input
                type="email"
                placeholder="example: abc@gmail.com"
                className="un"
              />
            </label>
            <label>
              {/* <p>Password</p> */}
              <input
                type="password"               
                placeholder="please enter password"
                className="pass"
              />
            </label>
            <div className="btn-submit">
              <Link to="#" type="submit" className="submit">
                Submit
              </Link>
            </div>
          </form>
        </div>
      </div>
    );
  }
  
export default LoginForm;