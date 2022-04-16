import Header from "./components/Header";
import Footer from "./components/Footer";
import Expenses from "./components/Expenses/Expenses";
import "./App.css";

const App = () => {
  const expenses = [
    {
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      title: "Car Insurance",
      amount: 35.67,
      date: new Date(2021, 3, 23),
    },
    {
      title: "Car Insurance",
      amount: 342.67,
      date: new Date(2021, 4, 12),
    },
    {
      title: "Car Insurance",
      amount: 434.67,
      date: new Date(2021, 5, 22),
    },
    {
      title: "Car Insurance",
      amount: 65.67,
      date: new Date(2021, 6, 4),
    },
  ];
  return (
    <div>
      <Header></Header>
      <Expenses items={expenses} />
      <Footer></Footer>
    </div>
  );
};

export default App;
