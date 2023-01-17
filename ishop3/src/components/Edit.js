import PropTypes from "prop-types";
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
      nameWarning: false,
      priceWarning: false,
      urlWarning: false,
      stockWarning: false,
    };

    this.controlForm = this.controlForm.bind(this);
  }

  componentDidMount() {
    if (this.state.itemName === " ") {
      this.setState({
        nameWarning: true,
        priceWarning: true,
        urlWarning: true,
        stockWarning: true,
      });
    }

    if (!this.state.disabled && this.props.itemInfo.code === 0) {
      this.props.blockButtons();
      this.setState({ disabled: true });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.itemInfo.code !== this.props.itemInfo.code) {
      this.setState({
        itemName: this.props.itemInfo.name,
        itemPrice: this.props.itemInfo.price,
        itemCode: this.props.itemInfo.code,
        itemUrl: this.props.itemInfo.url,
        itemStock: this.props.itemInfo.stock,
      });
    }

    if (prevState.itemName !== this.state.itemName) {
      if (this.state.itemName.length < 1) {
        this.setState({ nameWarning: true }, () => this.controlForm());
      } else {
        this.setState({ nameWarning: false }, () => this.controlForm());
      }
    }

    if (prevState.itemUrl !== this.state.itemUrl) {
      if (this.state.itemUrl.length < 1) {
        this.setState({ urlWarning: true }, () => this.controlForm());
      } else {
        this.setState({ urlWarning: false }, () => this.controlForm());
      }
    }

    if (prevState.itemPrice !== this.state.itemPrice) {
      if (/^[0-9]+$/.test(this.state.itemPrice)) {
        this.setState({ priceWarning: false }, () => this.controlForm());
      } else {
        this.setState({ priceWarning: true }, () => this.controlForm());
      }
    }

    if (prevState.itemStock !== this.state.itemStock) {
      if (/^[0-9]+$/.test(this.state.itemStock)) {
        this.setState({ stockWarning: false }, () => this.controlForm());
      } else {
        this.setState({ stockWarning: true }, () => this.controlForm());
      }
    }
  }

  cancelChange = () => {
    this.props.cancelFunc(this.props.itemInfo.code);
  };

  disableClick = () => {
    if (!this.state.disabled) {
      this.props.blockButtons();
      this.setState({ disabled: true });
    }
  };

  controlForm() {
    if (
      this.state.nameWarning === false &&
      this.state.priceWarning === false &&
      this.state.urlWarning === false &&
      this.state.stockWarning === false
    ) {
      this.setState({ disableBtn: false });
    } else {
      this.setState({ disableBtn: true });
    }
  }

  randomNum() {
    return Math.floor(100000 + Math.random() * 900000);
  }

  saveChange = () => {
    let code = this.props.itemInfo.code;
    if (code.toString() === "0") {
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
    this.setState({ [eo.target.name]: eo.target.value });
  };

  render() {
    return (
      <form className="editable" onChange={this.disableClick}>
        <label>
          <span>Название:</span>
          <input
            type="textarea"
            value={this.state.itemName}
            onChange={this.setValue}
            name="itemName"
          />
          {this.state.nameWarning && (
            <span className="error">поле не может быть пустым</span>
          )}
        </label>
        <label>
          <span>Цена:</span>
          <input
            type="text"
            name="itemPrice"
            value={this.state.itemPrice}
            onChange={this.setValue}
          />
          {this.state.priceWarning && (
            <span className="error">введите число</span>
          )}
        </label>
        <label>
          <span>Ссылка:</span>
          <input
            type="text"
            name="itemUrl"
            value={this.state.itemUrl}
            onChange={this.setValue}
          />
          {this.state.urlWarning && (
            <span className="error">поле не может быть пустым</span>
          )}
        </label>
        <label>
          <span>Остаток:</span>
          <input
            type="text"
            name="itemStock"
            value={this.state.itemStock}
            onChange={this.setValue}
          />
          {this.state.stockWarning && (
            <span className="error">введите цифры</span>
          )}
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
  itemInfo: PropTypes.object,
};
