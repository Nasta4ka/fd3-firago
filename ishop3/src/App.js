import Header from "./components/Header";
import Shop from "./components/Shop";

function App() {
  return (
    <div className="container">
      <Header />
      <main><Shop shopName={'iShop'}/></main>
    </div>
  );
}

export default App;
