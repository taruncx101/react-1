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
              <Signup isLoginPage={true} />
            </Route>
            <Route path="/signup">
              <Signup isLoginPage={false} />
            </Route>
          </Switch>
        </Layout>
      </Router>
    );
  }
}

export default App;
