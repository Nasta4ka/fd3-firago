import { Fragment } from "react";
import "./App.css";
import Frame from "./Frame";
import Space from "./Space";

let colors = ["#ffb3ba", "#ffdfba", "#ffffba", "#baffc9", "lavender"];

let text = (
  <>
    первый
    <br />
    второй
    <br />
    третий
    <br />
    последний
  </>
);

function App() {
  return (
    <Fragment>
      <Frame colors={colors}>
        <p>hello</p>
      </Frame>
      <Space text={text} />
    </Fragment>
  );
}

export default App;
