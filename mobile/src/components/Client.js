import { PureComponent } from "react";
import React from "react";
/* var EventEmitter = require('events') */
import { emitter } from "./events.js";

class MobileClient extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      inputLastName: " ",
      inputFirstName: " ",
      inputPatronymic: " ",
      inputBalance: " ",
    };
  }

  inputLastName = React.createRef();
  inputFirstName = React.createRef();
  inputPatronymic = React.createRef();
  inputBalance = React.createRef();

  handleDelete = (ee) => {
    emitter.emit("deleteInputs", this.props.clientInfo.id);
    ee.preventDefault();
  };

  handleSubmit = (ee) => {
    emitter.emit("editInputs", [
      this.props.clientInfo.id,
      this.inputLastName.current.value,
      this.inputFirstName.current.value,
      this.inputPatronymic.current.value,
      this.inputBalance.current.value,
    ]);
    ee.preventDefault();
  };

  getRef = (node) => {
    this.el = node;
  };

  render() {
    console.log("render client " + this.props.clientInfo.lastName);
    return (
      <tr className="MobileClient" onSubmit={this.handleSubmit}>
        <td className="cell">
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              defaultValue={this.props.clientInfo.lastName}
              ref={this.inputLastName}
            />
            <input
              type="text"
              defaultValue={this.props.clientInfo.firstName}
              ref={this.inputFirstName}
            />
            <input
              type="text"
              defaultValue={this.props.clientInfo.patronymic}
              ref={this.inputPatronymic}
            />
            <input
              type="text"
              defaultValue={this.props.clientInfo.balance}
              ref={this.inputBalance}
            />
            <span type="text" className="status">
              {this.props.clientInfo.balance > 0 ? `активен` : `заблокирован`}{" "}
            </span>
            <input
              className="button"
              type="submit"
              onClick={this.handleSubmit}
              value="edit"
            />
            <button onClick={this.handleDelete} className="button">
              удалить
            </button>
          </form>
        </td>
      </tr>
    );
  }
}

export default MobileClient;
