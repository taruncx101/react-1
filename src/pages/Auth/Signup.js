import React from "react";
import GoogleLoginComponent from "../../components/Auth/GoogleLogin/GoogleLoginComponent";

export default class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: {
        name: "",
        email: "",
        password: "",
      },
    };
    this.onChangeInputValue = this.onChangeInputValue.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.resetForm = this.resetForm.bind(this);
  }
  onChangeInputValue(e) {
    console.log("onChangeInputValue");
    let obj = {};
    obj[e.target.name] = e.target.value;
    this.setState({ userData: { ...this.state.userData, ...obj } });
  }
  async onSubmit(e) {
    console.log("onSubmit");
    e.preventDefault();
    const baseUrl = "http://localhost:8080"; 
    const url = baseUrl+"/auth/signup";
    const res = await fetch(url, {
      method: "put",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state.userData)
    })
    if (res.status === 201) {
    /** the success */
      console.log('success');
      this.resetForm();
    }
    else if( res.status === 422) {
    /** validation error */
      console.log('validation error');
    }
    else {
    /** most probably 500 error */
      console.log("server side error");
    }
    console.log(res)
    
  }
  resetForm() {
    this.setState({
      userData: {
        name: "",
        email: "",
        password: "",
      },
    });
  };
  render() {
    return (
      <form onSubmit={this.onSubmit}>
        {!this.props.isLoginPage ? (
          <div className="form-group">
            <label htmlFor="exampleInput1">Name</label>
            <input
              type="text"
              className="form-control"
              id="exampleInput1"
              aria-describedby="emailHelp"
              name="name"
              value={this.state.userData.name}
              onChange={this.onChangeInputValue}
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
            name="email"
            value={this.state.userData.email}
            onChange={this.onChangeInputValue}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            name="password"
            value={this.state.userData.password}
            onChange={this.onChangeInputValue}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          style={{ marginRight: "10px" }}
        >
          {this.props.isLoginPage ? "Login" : "Sign Up"}
        </button>
        <GoogleLoginComponent />
      </form>
    );
  }
}