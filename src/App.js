import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import './App.css';
import GoogleLoginComponent from "./components/GoogleLoginComponent";
import Layout from "./components/Layout/Layout"
class App extends React.Component {
  state = {
    isAuth: false,
    token: null,
    userId: null,
    authLoading: false,
    error: null,
    apiBaseUrl: "http://localhost:8000",
  };
  componentDidMount() {
    const token = localStorage.getItem("token");
    if (!token) {
      return;
    }
    this.setState({ isAuth: true, token: token });
  }
  render() {
    return (
      <React.Fragment>
          <Layout/>
        <div className="container">
          <h1>Hello</h1>
          <GoogleLoginComponent />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
