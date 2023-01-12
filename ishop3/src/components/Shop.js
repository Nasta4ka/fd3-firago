import React, { Component } from "react";
import PropTypes from "prop-types";
import Item from "./Item";
import Card from "./Card";
import "./shop.css";
import Edit from "./Edit";
let items = require("./data.json");

export default class Shop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentList: items,
      activeCode: "",
      activeItem: "",
      edited: false,
      editedItem: "",
      renderCard: false,
      renderEdit: false,
      disableSaveBtn: true,
      disabled: false,
      renderNew: false,
    };
    this.makeDeleted = this.makeDeleted.bind(this);
    this.makeActive = this.makeActive.bind(this);
    this.edit = this.edit.bind(this);
    this.saveChange = this.saveChange.bind(this);
    this.cancel = this.cancel.bind(this);
    this.blockButtons = this.blockButtons.bind(this);
    this.createNewCard = this.createNewCard.bind(this);
  }

  cancel(code) {
    let i = this.findIndex(code);
    this.setState({
      activeItem: this.state.currentList[i],
      activeCode: code,
      editedItem: "",
      renderEdit: false,
      renderNew: false,
      renderCard: true,
      disabled: false,
    });
  }

  makeActive(code) {
    if (this.state.disabled === false) {
      this.setState((prev) => ({ activeCode: code }));
      let i = this.findIndex(code);
      this.setState({
        renderEdit: false,
        renderNew: false,
        renderCard: true,
        activeItem: this.state.currentList[i],
      });

    }
  }

  findIndex(code) {
    let i;
    this.state.currentList.forEach((element) =>
      element.code === code
        ? (i = this.state.currentList.indexOf(element))
        : " "
    );
    return i;
  }

  blockButtons() {
    this.setState({ disabled: true });
  }

  edit(code) {
    this.setState({ renderEdit: true });
    let i = this.findIndex(code);
    this.setState((prevstate) => ({ activeCode: code }));
    this.setState((prevstate) => ({ editedItem: this.state.currentList[i] }));
  }

  saveChange(name, price, code, url, stock) {
    let i = this.findIndex(code);

    if (i > -1) {
      this.setState((prevState) => ({
        currentList: prevState.currentList.map((obj) =>
          obj.code === code
            ? Object.assign(obj, {
                name: name,
                price: price,
                url: url,
                stock: stock,
              })
            : obj
        ),
      }));
    } else {
      let obj = {
        code: code.toString(),
        name: name,
        description: "с этим проблемы) ",
        price: price,
        stock: stock,
        url: url,
      };

      this.setState({ currentList: [...this.state.currentList, ...[obj]] });
    }

    i = this.findIndex(code);
    this.setState({
      activeCode: code,
      activeItem: this.state.currentList[i],
      renderEdit: false,
      renderCard: true,
      disabled: false,
      renderNew: false,
    });
  }

  createNewCard() {
    this.setState({ renderNew: true, activeCode: " " });
  }

  makeDeleted(code) {
    if (window.confirm("Delete the item?")) {
      this.setState({
        currentList: this.state.currentList.filter((el) => el.code !== code),
      });
      this.state.activeCode === code && this.setState({ activeItem: "" });
      this.state.activeCode === code && this.setState({ renderCard: false });
    }
  }

  render() {
    return (
      <section className="items">
        <h2 className="items_title">будь в тренде с {this.props.shopName}</h2>
        <table className="item_list">
          <thead>
            <tr>
              <th>name</th>
              <th>price</th>
              <th>url</th>
              <th>quantity</th>
              <th>control</th>
            </tr>
          </thead>
          <tbody>
            {this.state.currentList.map((el) => (
              <Item
                key={el.code}
                shopItem={el}
                deleteFunc={this.makeDeleted}
                editFunc={this.edit}
                activeFunc={this.makeActive}
                active={this.state.activeCode === el.code ? true : false}
                disabled={this.state.disabled}
                id={el.code}
              />
            ))}
          </tbody>
        </table>
        <button
          type="button"
          onClick={this.createNewCard}
          disabled={this.state.disabled}
          style={{ width: `120px`, padding: `5px 10px`, margin: `20px 0` }}
        >
          новый товар
        </button>
        {this.state.renderCard &&
          !this.state.renderEdit &&
          !this.state.renderNew && 
          this.state.activeItem&& (
            <Card
              itemInfo={
                this.state.activeItem
              }
            />
          )}
        {this.state.renderEdit && !this.state.renderNew && (
          <Edit
            itemInfo={this.state.editedItem}
            disableBtn={this.state.disableSaveBtn}
            blockButtons={this.blockButtons}
            cancelFunc={this.cancel}
            changeFunc={this.saveChange}
          />
        )}

        {this.state.renderNew && (
          <Edit
            itemInfo={{
              code: 0,
              name: " ",
              description: " ",
              price: "",
              stock: "",
              url: " ",
            }}
            disableBtn={this.state.disableSaveBtn}
            blockButtons={this.blockButtons}
            cancelFunc={this.cancel}
            changeFunc={this.saveChange}
          />
        )}
      </section>
    );
  }
}

Shop.propTypes = {
  shopName: PropTypes.string,
};
