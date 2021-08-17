import React, { Component } from "react";
import { Link } from "react-router-dom";
import callApi from "../utils/apiCaller";


import './style.scss';


class SignUpForm extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      id:'',
      txtEmail: '',
      txtPass: '',
    };
  }
  onChange = (e) => {
    var target= e.target;
    var name= target.name;
    var value= target.type === 'checkbox'? target.checked : target.value;
    this.setState({
      [name]:value
    });
  }
  onSave = (e) => {
    e.preventDefault();
    var{txtEmail,txtPass}=this.state;
    callApi('users','POST',{
      gmail: txtEmail,
      password: txtPass,
    }).then(res=> {
      console.log(res);
    });
  }
  
  render() {
    var {txtEmail, txtPass}= this.state;
    return (
      <div className="sign-up">
        {" "}
        <div className="sign-up-wrapper main">
          <h1 className="sign">Please Sign Up</h1>
          <form onSubmit={this.onSave}>
            <label>
              {/* <p className="txt-un">Username</p> */}
              <input
                type="email"
                name="txtEmail"
                value={txtEmail} 
                onChange={this.onChange}
                placeholder="example: abc@gmail.com"
                className="un"
              />
            </label>
            <label>
              {/* <p className="txt-pass">Password</p> */}
              <input
                type="password"
                name="txtPass"
                value={txtPass} 
                onChange={this.onChange}
                placeholder="please enter password"
                className="pass"
              />
            </label>
            <label>
              {/* <p className="txt-repass">Repassword</p> */}
              <input
                type="password"
               
                placeholder="please enter repassword"
                className="pass"
              />
            </label>
            <div className="btn-submit">
              
              
              <Link to="/login" type="submit" className="submit">
                SIGN UP
              </Link>
            </div>
          </form>
        </div>
      </div>
    );

  }
}



  export default SignUpForm;
  // import React, {useState} from 'react';
  // import PropTypes from 'prop-types';
  // import './style.scss';
  // import {
  //     BrowserRouter as Router,
  //     Switch,
  //     Route,
  //     Link,
  //     NavLink,
  //   } from "react-router-dom";
  // SignUpForm.propTypes = {
  //     setToken: PropTypes.func.isRequired,
  // };
  
  // async function loginUser(credentials) {
  //     return fetch("http://localhost:3000/login", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(credentials),
  //     }).then((data) => data.json());
  //   }
  //   function SignUpForm({ setToken }) {
  //     const [username, setUserName] = useState();
  //     const [password, setPassword] = useState();
  //     const handleSubmit = async (e) => {
  //       e.preventDefault();
  //       const token = await loginUser({
  //         username,
  //         password,
  //       });
  //       setToken(token);
  //     };
  //     return (
  //       <div className="sign-up">
  //         {" "}
  //         <div className="sign-up-wrapper main">
  //           <h1 className="sign">Please Sign Up</h1>
  //           <form onSubmit={handleSubmit}>
  //             <label>
  //               {/* <p className="txt-un">Username</p> */}
  //               <input
  //                 type="email"
  //                 onChange={(event) => setUserName(event.target.value)}
  //                 placeholder="example: abc@gmail.com"
  //                 className="un"
  //               />
  //             </label>
  //             <label>
  //               {/* <p className="txt-pass">Password</p> */}
  //               <input
  //                 type="password"
  //                 onChange={(event) => setPassword(event.target.value)}
  //                 placeholder="please enter password"
  //                 className="pass"
  //               />
  //             </label>
  //             <label>
  //               {/* <p className="txt-repass">Repassword</p> */}
  //               <input
  //                 type="password"
  //                 onChange={(event) => setPassword(event.target.value)}
  //                 placeholder="please enter repassword"
  //                 className="pass"
  //               />
  //             </label>
  //             <div className="btn-submit">
  //               <Link to="#" type="submit" className="submit">
  //                 SIGN UP
  //               </Link>
  //             </div>
  //           </form>
  //         </div>
  //       </div>
  //     );
  //   }
    
  
  // export default SignUpForm;