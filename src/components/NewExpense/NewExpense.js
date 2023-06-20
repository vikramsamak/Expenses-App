import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

function NewExpense(props) {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (eneterdExpenseData) => {
    const expeseData = { ...eneterdExpenseData, id: Math.random().toString() };
    // console.log(expeseData);
    props.onAddExpense(expeseData);
    setIsEditing(false);
  };

  const startEditingHanler = () => {
    setIsEditing(true);
  };

  const stopEditingFunction = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHanler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancle={stopEditingFunction}
        ></ExpenseForm>
      )}
    </div>
  );
}

export default NewExpense;
