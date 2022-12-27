import React, { Component } from "react";
import PropTypes from "prop-types";
import Item from "./Item";
import "./shop.css";
let items = require('./data.json');


export default class Shop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentList: items, 
      activeCode: '',
    };
    this.makeDeleted = this.makeDeleted.bind(this)
    this.refresh = this.refresh.bind(this)
  }

  refresh(code) {
  this.setState({activeCode: code});
  }

  makeDeleted(code) {
    if (window.confirm("Delete the item?")) {
     let newList = this.state.currentList.slice()
     this.setState({currentList: newList.filter(el => el.code !== code)})
  }
}

  render() {
    return (
      <section className="items">
        <h2 className="items_title">будь в тренде с {this.props.shopName}</h2>
        <ul className="item_list">
          {this.state.currentList.map((el) => (
           <Item  shopItem={el} deleteFunc={this.makeDeleted} refreshFunc={this.refresh} active={this.state.activeCode === el.code ? true : false} key={el.code}/>
          ))}
        </ul>
      </section>
    );
  }
}

Shop.propTypes = {
  shopName: PropTypes.string
};