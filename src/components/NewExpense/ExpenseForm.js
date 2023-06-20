import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
  const [eneterdTitle, setEnteredTitle] = useState("");

  const [eneterdAmount, setEnteredAmount] = useState("");

  const [eneterdDate, setEnteredDate] = useState("");

  /* const [userInput, setUserInput] = useState({
    enteredTitle: "",
    eneteredAmount: "",
    eneteredDate: "",
  }); */
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    /* setUserInput({
      ...userInput,
      enteredTitle: event.target.value,
    }); */
    /* setUserInput((prevState) => {
      return { ...prevState, enteredTitle: event.target.value };
    }); */
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    /* setUserInput({
      ...userInput,
      eneteredAmount: event.target.value,
    }); */
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    /* setUserInput({
      ...userInput,
      eneteredDate: event.target.value,
    }); */
  };
  /* const inputHandler = (identifier, value) => {
    if (identifier === "title") {
      setEnteredTitle(value);
    } else if (identifier === "amount") {
      setEnteredAmount(value);
    } else if (identifier === "date") {
      setEnteredDate(value);
    } 
  };*/
  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: eneterdTitle,
      amount: +eneterdAmount,
      date: new Date(eneterdDate),
    };
    console.log(expenseData);
    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={eneterdTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={eneterdAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2023-12-31"
            value={eneterdDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancle}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
