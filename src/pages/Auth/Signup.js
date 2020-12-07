import React from "react";
import GoogleLoginComponent from "../../components/Auth/GoogleLogin/GoogleLoginComponent";

export default class Signup extends React.Component{
  constructor(props) {
    super();
  }
  render() {
    return (
      <form>
        {!this.props.isLoginPage ? (
          <div className="form-group">
            <label htmlFor="exampleInput1">Name</label>
            <input
              type="text"
              className="form-control"
              id="exampleInput1"
              aria-describedby="emailHelp"
            />
          </div>
        ) : null}

        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          Style="margin-right: 10px;"
        >
          {this.props.isLoginPage ? "Login" : "Sign Up"}
        </button>
        <GoogleLoginComponent />
      </form>
    );
  }
}