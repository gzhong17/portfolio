import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class Header extends Component {
  render() {
    const { pageName } = this.props;
    return (
      <div style={{ backgroundColor: "blue", color: "white" }}>
        I am the header for {pageName}
      </div>
    );
  }
}

export default Header;
