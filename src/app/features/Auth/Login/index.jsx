import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink,
  } from "react-router-dom";
  import './style.scss';
LoginForm.propTypes = {
    setToken: PropTypes.func.isRequired,
};

async function loginUser(credentials) {
    return fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    }).then((data) => data.json());
  }
function LoginForm({ setToken }) {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();
    const handleSubmit = async (e) => {
      e.preventDefault();
      const token = await loginUser({
        username,
        password,
      });
      setToken(token);
    };
    return (
      <div className="login">
      
        <div className="login-wrapper main">
          <h1 className="sign">Please Log In</h1>
          <form onSubmit={handleSubmit}>
            <label>
              {/* <p>Username</p> */}
              <input
                type="email"
                onChange={(event) => setUserName(event.target.value)}
                placeholder="example: abc@gmail.com"
                className="un"
              />
            </label>
            <label>
              {/* <p>Password</p> */}
              <input
                type="password"
                onChange={(event) => setPassword(event.target.value)}
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