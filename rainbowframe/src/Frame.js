import React, { Component } from "react";
import "./frame.css";
import PropTypes from "prop-types";

export default class Frame extends Component {
  render() {
    let j = 5;
    let myStr = ``;

    for (let i = 0; i < this.props.colors.length; i++) {
      myStr += `0 0 0 ${j}px ${this.props.colors[i]}, 0 0 0 ${j + 5}px white,`;
      j += 10;
    }

    myStr = myStr.slice(0, myStr.length - 1);

    return (
      <div style={{ boxShadow: myStr }} className={`myDiv`}>
        {this.props.children}
      </div>
    );
  }
}

Frame.propTypes = {
  colors: PropTypes.array,
};
