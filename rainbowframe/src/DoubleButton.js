import React, { Component } from "react";
import PropTypes from "prop-types";

export default class DoubleButton extends Component {
  render() {

    return (
<>
<input type={'button'} style={{margin: '5px'}} value={this.props.caption1} onClick={() => this.props.cbPressed(1)}/>
{this.props.children}
<input type={'button'} style={{margin: '5px'}} value={this.props.caption2} onClick={() => this.props.cbPressed(2)}/>
</>
    );
  }
}

DoubleButton.propTypes = {
  caption1: PropTypes.string,
  caption2: PropTypes.string,
};
