import React from "react";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";

function ExpenseItem(props) {
  /* const [title, setTitle] = useState(props.title);
  // console.log(props)
   */
  /* const ClickHandler = () => {
    setTitle(title);
  }; */
  // console.log(props.amount)
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date}></ExpenseDate>
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">{props.amount}</div>
        </div>
        {/* <button onClick={ClickHandler}>Change Title</button> */}
      </Card>
    </li>
  );
}

export default ExpenseItem;
