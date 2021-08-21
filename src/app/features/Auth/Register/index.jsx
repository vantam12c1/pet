import callApi from "./../utils/apiCaller";
import React, { useEffect, useState } from 'react';
import './style.scss';
import { useHistory } from "react-router-dom";



function SignUpForm() {
   useEffect(() => {
    if (localStorage.getItem('user-info')) 
    {
      history.push('/home')
    }
  }, [])
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  let history= useHistory();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if(username != null && password  != null)
    {
      let item={username,password}
      console.warn(item)
      let result= await fetch("http://localhost:7777/users",{
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(item)
      })
      result= await result.json()
      alert("Đăng ký thành công, chuyển tới trang đăng nhập");
      localStorage.setItem("user-info",JSON.stringify(result))
      history.push('/home');
    //   callApi('users', 'POST', {
    //     gmail: username,
    //     password: password,
    //   }).then(res => {
    //     console.log(res);
    //     alert("Đăng ký thành công");
    //     history.push('/home');
    //   });
     
    //   localStorage.setItem("user-info",JSON.stringify())
     }
    else{
      alert("Đăng ký thất bại");
    }

   
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
              name="setUserName"
              onChange={(event) => setUserName(event.target.value)}
              placeholder="example: abc@gmail.com"
              className="un"
            />
          </label>
          <label>
            {/* <p className="txt-pass">Password</p> */}
            <input
              type="password"
              name="setPassword"
              onChange={(event) => setPassword(event.target.value)}
              placeholder="please enter password"
              className="pass"
            />
          </label>
          <label>
            {/* <p className="txt-repass">Repassword</p> */}
            <input
              type="password"
              name="setPassword"
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