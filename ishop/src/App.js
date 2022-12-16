import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
const myShopName = "iShop";
let items = [
  {
    code: 1,
    name: "Коврик армированный",
    description:
      "Нескользящий коврик увеличенного размера для комфортной практики",
    price: 29.0,
    stock: 5,
    url: "./items-img/code1.jpg",
  },
  {
    code: 2,
    name: "Коврик non-slip",
    description:
      "Нескользящий коврик спокрытием non-slip из натурального каучука",
    price: 99.0,
    stock: 1,
    url: "./items-img/code2.jpg",
  },
  {
    code: 3,
    name: "Браслет",
    description:
      "Браслет из натуральных камней для сохранения внутреннего баланса",
    price: 17.0,
    stock: 4,
    url: "./items-img/code3.jpg",
  },
  {
    code: 4,
    name: "Блок спортивный",
    description: "Блок из массива ясеня с узорами ручной работы",
    price: 13.0,
    stock: 18,
    url: "./items-img/code4.jpeg",
  },
  {
    code: 5,
    name: "Болстер",
    description: "Удобная подушка из гречихи наполнит вас спокойствием",
    price: 25.0,
    stock: 8,
    url: "./items-img/code5.jpg",
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <main>
        <Items shopName={myShopName} shopItems={items} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
