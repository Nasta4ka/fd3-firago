import Filter from "./Filter";
import wordArr from "./array";

function App() {
  return (
    <div className="container">
      <Filter listOfWords={wordArr} />
    </div>
  );
}

export default App;
