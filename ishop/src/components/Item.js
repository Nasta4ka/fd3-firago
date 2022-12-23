import React, { Component } from "react";
import "./item.css";
import PropTypes from "prop-types";

export default class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentList: props.shopItems, //не очень, но лучше не получается)
      selectedItem: {},
    };
  }

  changeSelect(el) {
    this.setState((prevstate) => ({ selectedItem: el }));
  }

  setItems() {
    this.setState({ currentList: this.props.shopItems });
  }

  deleteItem(el) {
    this.setState({ selectedItem: " " });
    if (window.confirm("Delete the item?")) {
      this.setState((prevstate) => ({
        currentList: this.state.currentList.filter((item) => item !== el),
      }));
    }
  }

  render() {
    return (
      <section className="items">
        <h2 className="items_title">будь в тренде с {this.props.shopName}</h2>
        <ul className="item_list">
          {this.state.currentList.map((el) => (
            <li
              onClick={() => {
                this.changeSelect(el);
              }}
              key={el.code}
              className={
                this.state.selectedItem === el ? "item_selected" : "item"
              }
            >
              <button
                onClick={() => {
                  this.deleteItem(el);
                }}
                className="delete_button"
              >
                x
              </button>
              <span>{el.name}</span>
              <span>
                <b>{el.price}$</b>
              </span>
              <img src={el.url} width={250} alt="товар" />
              <span>на складе: {el.stock}</span>
            </li>
          ))}
        </ul>
      </section>
    );
  }
}

Item.propTypes = {
  shopName: PropTypes.string,
  shopItems: PropTypes.array,
};
