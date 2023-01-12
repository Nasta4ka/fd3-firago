import React from "react";
import "./header.css";

export default function Header() {
  return (
    <header>
      <div className="upper_header">
        <div className="logo">
          <img src={"./img/lotus.png"} width={50} alt="логотип" />
        </div>
        <ul className="nav">
          <li>коврики</li>
          <li>пропсы</li>
          <li>аксессуары</li>
          <li>одежда</li>
        </ul>
        <ul className="user_info">
          <li>log in</li>
        </ul>
      </div>
    </header>
  );
}
