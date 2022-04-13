import logo from "./logo.svg";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ExpenseItem from "./components/ExpenseItem";
import "./App.css";

function App() {
  const expenses = [
    {
      title:'Car Insurance',amount:294.67, date: new Date(2021, 2, 28)
    },
    {
      title:'Car Insurance',amount:294.67, date: new Date(2021, 2, 28)
    },
    {
      title:'Car Insurance',amount:294.67, date: new Date(2021, 2, 28)
    },
    {
      title:'Car Insurance',amount:294.67, date: new Date(2021, 2, 28)
    },
    {
      title:'Car Insurance',amount:294.67, date: new Date(2021, 2, 28)
    },
  ];
  return (
    <div>
      <Header></Header>
      <ExpenseItem></ExpenseItem>
      <Footer></Footer>
    </div>
  );
}

export default App;
