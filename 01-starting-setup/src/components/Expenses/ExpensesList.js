import React from 'react';
import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';

const ExpensesList =  props => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses</h2>;
  }

  let expensesContent = props.items.map((expense) => (
    <ExpenseItem
      key={expense.id}
      title={expense.title}
      amount={expense.amount}
      date={expense.date}
    />
  ));

  return <ul className="expenses-list">
    {expensesContent}
  </ul>
};

export default ExpensesList;