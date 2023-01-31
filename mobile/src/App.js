import "./App.css";
import Company from "./components/Company.js";

function App() {
  let companyName = "life :)";
  let clientsArr = [
    {
      id: 101,
      lastName: "Котов",
      firstName: "Иван",
      patronymic: "Владимирович",
      balance: 200,
    },
    {
      id: 105,
      lastName: "Волков",
      firstName: "Роман",
      patronymic: "Никитич",
      balance: 250,
    },
    {
      id: 110,
      lastName: "Кабанов",
      firstName: "Леонид",
      patronymic: "Александрович",
      balance: 120,
    },
    {
      id: 120,
      lastName: "Зайцев",
      firstName: "Пётр",
      patronymic: "Олегович",
      balance: -10,
    },
    {
      id: 115,
      lastName: "Баранова",
      firstName: "Наталья",
      patronymic: "Александровна",
      balance: 180,
    },
    {
      id: 126,
      lastName: "Зайцева",
      firstName: "Дарья",
      patronymic: "Олеговна",
      balance: 0,
    },
  ];

  return (
    <div className="App">
      <Company name={companyName} clients={clientsArr} />
    </div>
  );
}

export default App;
