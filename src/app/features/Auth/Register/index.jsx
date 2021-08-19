
import callApi from "./../utils/apiCaller";
import React, { useState } from 'react';
import './style.scss';
import { useHistory } from "react-router-dom";


function SignUpForm() {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  let history= useHistory();
  const handleSubmit = async (e) => {
    e.preventDefault();

    callApi('users', 'POST', {
      gmail: username,
      password: password,
    }).then(res => {
      console.log(res);
      history.push('/login');
    });
  };
  return (
    <div className="sign-up">
      {" "}
      <div className="sign-up-wrapper main">
        <h1 className="sign">Please Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <label>
            {/* <p className="txt-un">Username</p> */}
            <input
              type="email"
              onChange={(event) => setUserName(event.target.value)}
              placeholder="example: abc@gmail.com"
              className="un"
            />
          </label>
          <label>
            {/* <p className="txt-pass">Password</p> */}
            <input
              type="password"
              onChange={(event) => setPassword(event.target.value)}
              placeholder="please enter password"
              className="pass"
            />
          </label>
          <label>
            {/* <p className="txt-repass">Repassword</p> */}
            <input
              type="password"
              onChange={(event) => setPassword(event.target.value)}
              placeholder="please enter repassword"
              className="pass"
            />
          </label>
          <div className="btn-submit">
            <button type="submit" className="submit">SIGN UP</button>
            {/* <button onclick={()=> history.push('/login')}type="submit" className="submit">SIGN UP</button> */}
          </div>
        </form>
      </div>
    </div>
  );
}


export default SignUpForm;