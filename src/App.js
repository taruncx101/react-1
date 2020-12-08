import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import './App.css';
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
    apiBaseUrl: "http://localhost:8080",
  };
  componentDidMount() {
    this.setToken = this.setToken.bind(this);
    const token = localStorage.getItem("token");
    if (token) {
      /** need to do couple of things get user by token
       * need to check the token is expire or not
       */
      this.setToken(token);
    }
  }
  setToken(token) {
    this.setState({ isAuth: true, token: token });
    localStorage.setItem("token", token);
  }
  logoutHandler = () => {
    this.setState({ isAuth: false, token: null });
    localStorage.removeItem("token");
  };
  render() {
    return (
      <Router>
        <Layout isAuth={this.state.isAuth} logoutHandler={this.logoutHandler}>
          <Switch>
            <Route exact path="/">
              <Users
                token={this.state.token}
                apiBaseUrl={this.state.apiBaseUrl}
              />
            </Route>
            <Route path="/login">
              <Signup
                isLoginPage={true}
                apiBaseUrl={this.state.apiBaseUrl}
                setToken={this.setToken}
              />
            </Route>
            <Route path="/signup">
              <Signup
                isLoginPage={false}
                apiBaseUrl={this.state.apiBaseUrl}
                setToken={this.setToken}
              />
            </Route>
          </Switch>
        </Layout>
      </Router>
    );
  }
}

export default App;
