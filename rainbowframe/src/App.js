import { Fragment } from "react";
import "./App.css";
import DoubleButton from "./DoubleButton";
import withRainbowFrame from "./withRainbowFrame";
let colors = ["#ffb3ba", "#ffdfba", "#ffffba", "#baffc9", "lavender"];

let FramedDoubleButton = withRainbowFrame(colors)(DoubleButton);

function App() {
  return (
    <Fragment>
      <FramedDoubleButton
        caption1="кнопка1"
        caption2="кнопка2"
        cbPressed={(num) => alert(num)}
      >
        какой-то текст
      </FramedDoubleButton>
    </Fragment>
  );
}

export default App;
