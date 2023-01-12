import PropTypes from 'prop-types'
import React, { Component } from "react";

export default class Edit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      itemName: this.props.itemInfo.name,
      itemPrice: this.props.itemInfo.price,
      itemCode: this.props.itemInfo.code,
      itemUrl: this.props.itemInfo.url,
      itemStock: this.props.itemInfo.stock,
      disableBtn: true,
      disabled: false,
      nameWarning: "none",
      priceWarning: "none",
      urlWarning: "none",
      stockWarning: "none",
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.setState({
        itemName: this.props.itemInfo.name,
        itemPrice: this.props.itemInfo.price,
        itemCode: this.props.itemInfo.code,
        itemUrl: this.props.itemInfo.url,
        itemStock: this.props.itemInfo.stock,
      });
    }
  }
  cancelChange = () => {
    this.props.cancelFunc(this.props.itemInfo.code);
  };

  controlForm = (eo) => {
console.log(eo)

    if (!this.state.disabled) {
      this.props.blockButtons();
      this.setState({ disabled: true });
    }

    if (
      this.state.nameWarning === "none" &&
      this.state.priceWarning === "none" &&
      this.state.urlWarning === "none" &&
      this.state.stockWarning === "none"
    ) {
      this.setState({ disableBtn: false });
    } else {
      this.setState({ disableBtn: true });
    }
  };

  randomNum() {
    return Math.floor(100000 + Math.random() * 900000);
  }

  saveChange = () => {
    let code = this.props.itemInfo.code;
    if (code.toString() === '0') {
      code = this.randomNum();
    }

    this.props.changeFunc(
      this.state.itemName,
      this.state.itemPrice,
      code,
      this.state.itemUrl,
      this.state.itemStock
    );
  };

  setValue = (eo) => {
 this.setState({ [eo.target.name]: eo.target.value })
  };

  render() {
    return (
      <form className="editable" onInput={this.controlForm}>
        <label>
          <span>Название:</span>
          <input
            type="text"
            value={this.state.itemName}
            onChange={this.setValue}
            name="itemName"
          />
          <span
            style={{
              color: `red`,
              display: this.state.nameWarning,
              marginLeft: `5px`,
            }}
          >
            укажите название
          </span>
        </label>
        <label>
          <span>Цена:</span>
          <input
            type="text"
            name="itemPrice"
            value={this.state.itemPrice}
            onChange={this.setValue}
          />
          <span
            style={{
              color: `red`,
              display: this.state.priceWarning,
              marginLeft: `5px`,
            }}
          >
            укажите цену
          </span>
        </label>
        <label>
          <span>Ссылка:</span>
          <input
            type="text"
            name="itemUrl"
            value={this.state.itemUrl}
            onChange={this.setValue}
          />
          <span
            style={{
              color: `red`,
              display: this.state.urlWarning,
              marginLeft: `5px`,
            }}
          >
            нужна ссылка
          </span>
        </label>
        <label>
          <span>Остаток:</span>
          <input
            type="text"
            name="itemStock"
            value={this.state.itemStock}
            onChange={this.setValue}
          />
          <span
            style={{
              color: `red`,
              display: this.state.stockWarning,
              marginLeft: `5px`,
            }}
          >
            укажите остаток
          </span>
        </label>
        <label>
          <button
            className="button"
            type="button"
            disabled={this.state.disableBtn}
            onClick={this.saveChange}
          >
            сохранить
          </button>
          <button className="button" type="button" onClick={this.cancelChange}>
            отмена
          </button>
        </label>
      </form>
    );
  }
}

Edit.propTypes = {
  itemInfo: PropTypes.object
};
