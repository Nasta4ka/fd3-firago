import Filter from "./Filter";
import wordArr from "./array";

function App() {
  return (
    <div className="container">
      <Filter list={wordArr} />
    </div>
  );
}

export default App;
