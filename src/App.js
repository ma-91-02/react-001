import Header from "./components/Header";
import Footer from "./components/Footer";
import ExpenseItem from "./components/ExpenseItem";
import "./App.css";

function App() {
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
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
            <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
            <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
            <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      />
            <ExpenseItem
        title={expenses[4].title}
        amount={expenses[4].amount}
        date={expenses[4].date}
      />
      <Footer></Footer>
    </div>
  );
}

export default App;
