import "./filter.css";
import PropTypes from "prop-types";
import React, { Component } from "react";
export default class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentList: props.listOfWords, //пишут, что плохая практика
      isChecked: false,
      query: "",
    };
    this.handleButton = this.handleButton.bind(this);
    this.handleCheckbox = this.handleCheckbox.bind(this);
    this.handleQuery = this.handleQuery.bind(this);
  }

  handleButton() {
    this.setState({ isChecked: false });
    this.setState({ query: "" });
    this.setState({ currentList: this.props.listOfWords });
  }

  handleQuery(value) {
    this.setState({ query: value }, this.handleFilter);
  }

  handleCheckbox(check) {
    this.setState({ isChecked: check }, this.handleFilter);
  }

  handleFilter() {
    let subStrt = this.state.query.toLowerCase();
    let isChecked = this.state.isChecked;
    let list = this.props.listOfWords.slice(0);
    if (isChecked === true) {
      this.setState({
        currentList: list
          .filter((item) => {
            return item.toLowerCase().includes(`${subStrt}`);
          })
          .sort(),
      });
    }
    if (isChecked === false) {
      this.setState({
        currentList: list.filter((item) => {
          return item.toLowerCase().includes(`${subStrt}`);
        }),
      });
    }
  }

  render() {
    return (
      <div className="filter">
        <h3 className="title">my filter</h3>
        <input
          type="checkbox"
          className="checkbox"
          checked={this.state.isChecked}
          onChange={(event) => this.handleCheckbox(event.target.checked)}
        ></input>
        <input
          type="text"
          className="text"
          value={this.state.query}
          onChange={(event) => this.handleQuery(event.target.value)}
        ></input>
        <button type="button" className="button" onClick={this.handleButton}>
          сброс
        </button>
        <textarea
          className="textarea"
          readOnly={true}
          value={this.state.currentList.join(" ")}
        ></textarea>
      </div>
    );
  }
}

Filter.propTypes = {
  listOfWords: PropTypes.array,
};
