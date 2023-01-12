import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Item extends Component {
  deleteItem = (eo) => {
    eo.stopPropagation();
    this.props.deleteFunc(this.props.shopItem.code);
  };

  editItem = (eo) => {
    eo.stopPropagation();
    this.props.editFunc(this.props.shopItem.code);
  };

  select = () => {
    this.props.activeFunc(this.props.shopItem.code);
  };

  render() {
    return (
      <tr
        onClick={this.select}
        key={this.props.shopItem.code}
        className={this.props.active === true ? "item_selected" : "item"}
      >
        <td className="cell">{this.props.shopItem.name}</td>
        <td className="cell">
          <b>{this.props.shopItem.price}$</b>
        </td>
        <td className="cell">{this.props.shopItem.url}</td>
        <td className="cell">на складе: {this.props.shopItem.stock}</td>
        <td className="cell">
          <button
            onClick={this.editItem}
            disabled={this.props.disabled}
            className="edit_button"
          >
            edit
          </button>
          <button
            onClick={this.deleteItem}
            disabled={this.props.disabled}
            className="delete_button"
          >
            delete
          </button>
        </td>
      </tr>
    );
  }
}

Item.propTypes = {
  shopItem: PropTypes.object,
  active: PropTypes.bool,
};
