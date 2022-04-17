import Header from "./components/Header";
import Footer from "./components/Footer";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import "./App.css";

const App = () => {
  const expenses = [
    {
      id:'e1',
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id:'e2',
      title: "Car Insurance",
      amount: 35.67,
      date: new Date(2021, 3, 23),
    },
    {
      id:'e3',
      title: "Car Insurance",
      amount: 342.67,
      date: new Date(2021, 4, 12),
    },
    {
      id:'e4',
      title: "Car Insurance",
      amount: 434.67,
      date: new Date(2021, 5, 22),
    },
    {
      id:'e5',
      title: "Car Insurance",
      amount: 65.67,
      date: new Date(2021, 6, 4),
    },
  ];

  const addExpenseHandler = expense =>{
    console.log('in App.js');
    console.log(expense);
  };
  return (
    <div>
      <Header></Header>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses} />
      <Footer></Footer>
    </div>
  );
};

export default App;
