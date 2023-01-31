import React from "react";
import { PureComponent } from "react";
import "./company.css";
import MobileClient from "./Client";
import { emitter } from "./events.js";

class Company extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      clientList: this.props.clients,
      mode: "all",
    };
  }

  componentDidMount = () => {
    emitter.addListener("editInputs", this.editClient);
    emitter.addListener("deleteInputs", this.deleteClient);
  };

  componentWillUnmount = () => {
    emitter.removeListener("editInputs", this.editClient);
    emitter.removeListener("deleteInputs", this.deleteClient);
  };

  editClient = ([id, lastName, firstName, patronymic, balance]) => {
    let myList = this.state.clientList;
    myList = myList.map((el) =>
      el.id === id
        ? (el = { id, lastName, firstName, patronymic, balance })
        : el
    );
    this.setState({ clientList: myList });
  };

  deleteClient = (id) => {
    const myList = [...this.state.clientList];
    myList.splice(
      myList.findIndex((client) => client.id === id),
      1
    );
    this.setState({ clientList: myList });
  };

  showAll = () => {
    this.setState({ mode: "all" });
  };

  showActive = () => {
    this.setState({ mode: "active" });
  };
  showBlocked = () => {
    this.setState({ mode: "blocked" });
  };

  render() {
    console.log(" render company");

    return (
      <div className="wrapper">
        <h1 className="title">{this.props.name}</h1>
        <div className="buttons_group">
          <button onClick={this.showAll}>все</button>
          <button onClick={this.showActive}>активные</button>
          <button onClick={this.showBlocked}>заблокированные</button>
        </div>
        <table>
          <thead>
            <tr className="row">
              <td className="headcell">
                <span>фамилия</span>
                <span>имя</span>
                <span>отчество</span>
                <span>баланс</span>
                <span>статус</span>
                <span>редактировать</span>
                <span>удалить</span>
              </td>
            </tr>
          </thead>
          <tbody>
            {this.state.mode === "all" &&
              this.state.clientList.map((el) => (
                <MobileClient clientInfo={el} key={el.id} />
              ))}
            {this.state.mode === "active" &&
              this.state.clientList.map(
                (el) =>
                  el.balance > 0 && <MobileClient clientInfo={el} key={el.id} />
              )}
            {this.state.mode === "blocked" &&
              this.state.clientList.map(
                (el) =>
                  el.balance <= 0 && (
                    <MobileClient clientInfo={el} key={el.id} />
                  )
              )}
          </tbody>
        </table>
      </div>
    );
  }
}
export default Company;
