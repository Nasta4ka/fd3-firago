import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemName: this.props.shopItem.name,
      itemPrice: this.props.shopItem.price,
      itemCode: this.props.shopItem.code,
      itemUrl: this.props.shopItem.url,
      itemStock: this.props.shopItem.stock,
      active: this.props.active,
    };
  }

  deleteItem = (eo) => {
    eo.stopPropagation();
    this.props.deleteFunc(this.state.itemCode);
  };

  select = () => {
    this.props.refreshFunc(this.state.itemCode);
  };

  render() {
    return (
      <li
        onClick={this.select}
        key={this.state.itemCode}
        className={this.props.active === true ? "item_selected" : "item"}
      >
        <button onClick={this.deleteItem} className="delete_button">
          x
        </button>
        <span>{this.state.itemName}</span>
        <span>
          <b>{this.state.itemPrice}$</b>
        </span>
        <img src={this.state.itemUrl} width={250} alt="товар" />
        {<span>на складе: {this.state.itemStock}</span>}
      </li>
    );
  }
}

Item.propTypes = {
  shopItem: PropTypes.object,
  active: PropTypes.bool,
};
