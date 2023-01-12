import PropTypes from 'prop-types'
import React, { Component } from "react";

export default class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {
      itemName: this.props.itemInfo.name,
      itemPrice: this.props.itemInfo.price,
      itemCode: this.props.itemInfo.code,
      itemUrl: this.props.itemInfo.url,
      itemStock: this.props.itemInfo.stock,
    };
  }

  render() {
    return (
      <div className="card">
        <span>{this.props.itemInfo.name}</span>
        <span>Цена: {this.props.itemInfo.price}$</span>
        <img src={this.props.itemInfo.url} alt="товар" width={200} />
        <span>На складе: {this.props.itemInfo.stock}</span>
      </div>
    );
  }
}

Card.propTypes = {
  itemInfo: PropTypes.object,
};
