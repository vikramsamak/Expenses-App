import Card from "../UI/Card";
// import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpenseFilter from "./ExpenseFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [year, setYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === year;
  });

  // console.log(filteredExpenses);
  return (
    <Card className="expenses">
      <ExpenseFilter
        selectedYear={year}
        onChangeFilter={filterChangeHandler}
      ></ExpenseFilter>
      <ExpensesChart expenses={filteredExpenses}></ExpensesChart>
      <ExpensesList items={filteredExpenses}></ExpensesList>
    </Card>
  );
}

export default Expenses;
