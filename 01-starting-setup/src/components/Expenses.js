import ExpenseItem from "./ExpenseItem";
import './Expenses.css';

function Expenses(props) {
  return (
    <div className="expenses">
      <ExpenseItem
        title={props.expences[0].title}
        amount={props.expences[0].amount}
        date={props.expences[0].date}
      />
      <ExpenseItem
        title={props.expences[1].title}
        amount={props.expences[1].amount}
        date={props.expences[1].date}
      />
      <ExpenseItem
        title={props.expences[2].title}
        amount={props.expences[2].amount}
        date={props.expences[2].date}
      />
    </div>
  );
}

export default Expenses;