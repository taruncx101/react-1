import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import './App.css';
import GoogleLoginComponent from "./components/GoogleLoginComponent";
import Layout from "./components/Layout/Layout"
import Users from './pages/User/Users'
import Signup from "./pages/Auth/Signup";

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
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/">
              <Users />
            </Route>
            <Route path="/login">
              <Signup />
            </Route>
            <Route path="/signup">
              <Signup />
            </Route>
          </Switch>
        </Layout>
        <div className="container">
          <GoogleLoginComponent />
        </div>
      </Router>
    );
  }
}

export default App;
