import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./components/pages/Home";
import { OrderSummary } from "./components/pages/OrderSummary";
import { ShoppingCart } from "./components/pages/ShoppingCart";
import { Footer } from "./components/pages/Footer";
import { Header } from "./components/pages/Header";
import { List } from "./components/elements/List";
import { ProductCard } from "./components/pages/ProductCard";
import NoMatch from "./components/pages/NoMatch";
import Products from "./components/pages/Products";

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="products" element={<Products />}>
            <Route index element={<List />} />
            <Route path=":category" index element={<List />} />
            <Route path=":category" element={<List />} />
          </Route>
          <Route path="products/:category/:id" element={<ProductCard />} />
          <Route path="cart" element={<ShoppingCart />} />
          <Route path="*" element={<NoMatch />} />
          <Route path="order" element={<OrderSummary />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
