import React, { Component } from "react";
import PropTypes from "prop-types";
import "./space.css";

export default class Space extends Component {
  render() {
    return <div className={"text"}>{this.props.text}</div>;
  }
}

Space.propTypes = {
  colors: PropTypes.string,
};
