import React, { useEffect, useState } from 'react';
import { Link, useHistory } from "react-router-dom";


// import callApi from '../utils/apiCaller';
import './style.scss';

function LoginForm() {
  useEffect(() => {
    if (localStorage.getItem('user-info')) {
      history.push("/home")
    }
  }, [])
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  async function login() {

    // let item = { username, password };
    // let result = await fetch("http://localhost:7777/users" , {
    //   method: 'POST',
    //   headers: {
    //     "Content-Type": "application/json",
    //     "Accept": 'application/json'
    //   },
    //   body: JSON.stringify(item)
    // });
    // result = await result.json();
    // alert("Đăng nhập thành công");
    // localStorage.setItem("user-info", JSON.stringify(result))
    // history.push("/home")
    if (username != null && password != null) {
      let item = { username, password };
      console.warn(username, password)
      let result = await fetch("http://localhost:7777/users", {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
          "Accept": 'application/json'
        },
        body: JSON.stringify(item)
      });
      result = await result.json()
      alert("Đăng Nhập thành công");
      localStorage.setItem("user-info", JSON.stringify(result))
      history.push('/home');
    }
    else {
      alert("Đăng ký thất bại");
    }

  }
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
              onChange={(e) => setUserName(e.target.value)}
              className="un"
            />
          </label>
          <label>
            {/* <p>Password</p> */}
            <input
              type="password"
              placeholder="please enter password"
              onChange={(e) => setPassword(e.target.value)}
              className="pass"
            />
          </label>
          <div className="btn-submit">

            <button onClick={login} type="submit" className="submit">LOGIN</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;