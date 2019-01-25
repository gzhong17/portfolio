import React, { Component } from "react";
import logo from "./logo.svg";
import Header from "./Header";
import "./App.css";

class App extends Component {
  render() {
    const { children } = this.props;
    return <div>{children}</div>;
  }
}

export default App;
