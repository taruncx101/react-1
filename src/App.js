import React from "react";
import {
  Switch,
  Route,
  withRouter,
} from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import './App.css';
import Layout from "./components/Layout/Layout"
import Users from './pages/User/Users'
import Home from "./pages/Home/Home";
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
  onLoginSuccess = (token) => {
    this.setToken(token);
    this.props.history.push("/users");
    
  }
  setToken(token) {
    this.setState({ isAuth: true, token: token });
    localStorage.setItem("token", token);
  }
  logoutHandler = () => {
    this.setState({ isAuth: false, token: null });
    localStorage.removeItem("token");
    this.props.history.push("/home");
  };
  render() {
    return (
      <Layout isAuth={this.state.isAuth} logoutHandler={this.logoutHandler}>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/users">
            <Users
              token={this.state.token}
              apiBaseUrl={this.state.apiBaseUrl}
            />
          </Route>
          <Route path="/login">
            <Signup
              isLoginPage={true}
              apiBaseUrl={this.state.apiBaseUrl}
              onLoginSuccess={this.onLoginSuccess}
            />
          </Route>
          <Route path="/signup">
            <Signup
              isLoginPage={false}
              apiBaseUrl={this.state.apiBaseUrl}
              onLoginSuccess={this.onLoginSuccess}
            />
          </Route>
        </Switch>
      </Layout>
    );
  }
}

export default withRouter(App);
