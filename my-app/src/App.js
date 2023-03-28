import React from "react";
// import ExpenseItem from "./components/ExpenseItem";
import Expenses from "./components/Expenses/Expenses";
const App = () => {
  const expenses = [
    {
      id: "e1",
      title: "car Insurance",
      amount: 267.94,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e2",
      title: "Toilet paper",
      amount: 267.94,
      date: new Date(2021, 2, 28),
    },
    { id: "e3", title: "Tv", amount: 267.94, date: new Date(2021, 2, 28) },
    {
      id: "e4",
      title: "Electrisite",
      amount: 267.94,
      date: new Date(2021, 2, 28),
    },
  ];
  return (
    <div className="App">
      <h2>let's start by the first project</h2>
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
