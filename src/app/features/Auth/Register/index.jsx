import React, { Component } from "react";
import { Link } from "react-router-dom";
import callApi from "../utils/apiCaller";


import './style.scss';


class SignUpForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      id: '',
      txtEmail: '',
      txtPass: '',
    };
  }
  onChange = (e) => {
    var target = e.target;
    var name = target.name;
    var value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value
    });
  }
  onSave = (e) => {
    e.preventDefault();
    var { txtEmail, txtPass } = this.state;
    callApi('users', 'POST', {
      gmail: txtEmail,
      password: txtPass,
    }).then(res => {
      console.log(res);
    });
  }

  render() {
    var { txtEmail, txtPass } = this.state;
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