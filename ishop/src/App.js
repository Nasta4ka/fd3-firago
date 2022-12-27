import Header from "./components/Header";
import Footer from "./components/Footer";
import Shop from "./components/Shop";



function App() {
  return (
    <div className="container">
      <Header />
      <main><Shop shopName={'iShop'}/></main>
      <Footer />
    </div>
  );
}

export default App;
