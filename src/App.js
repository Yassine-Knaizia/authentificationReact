import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import Register from "./components/Register.js";
import Login from "./components/Login.js";
import Home from "./components/Home.js";
const authenticated = (user, Component, props) =>
  user ? <Component {...props} /> : <Redirect to="/login" />;
const notAuthenticated = (user, Component, props) =>
  user ? <Redirect to="/" /> : <Component {...props} />;
// let testUser = { username: "ahmed" };
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { user: null };
  }
  async componentWillMount() {
    let response = await fetch("api/user");
    let data = await response.json();
    let loginUser = data.user;
    if ("username" in loginUser) {
      this.setState({ user: data.user }, () => console.log(this.state.user));
    }
  }
  changeUser(user) {
    this.setState({ user });
  }
  urls() {
    return this.state.user
      ? [{ path: "/", display: "Home" }]
      : [
          { path: "/register", display: "Register" },
          { path: "/login", display: "Login" },
        ];
  }
  render() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              {this.urls().map((url) => (
                <li>
                  <Link to={url.path}>{url.display}</Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/register">
              {notAuthenticated(this.state.user, Register, {
                changeUser: this.changeUser.bind(this),
              })}
            </Route>
            <Route path="/login">
              {notAuthenticated(this.state.user, Login, {
                changeUser: this.changeUser.bind(this),
              })}
            </Route>
            <Route path="/">
              {authenticated(this.state.user, Home, {
                user: this.state.user,
                changeUser: this.changeUser.bind(this),
              })}
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}
