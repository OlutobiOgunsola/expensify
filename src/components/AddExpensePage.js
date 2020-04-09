import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { addExpense } from '../actions/expenses';

const AddExpenseComponent = props => {
  return (
    <div>
      <Header />
      <ExpenseForm
        onSubmit={expense => {
          props.dispatch(addExpense(expense));
          console.log(expense);
          props.history.push('/');
        }}
      />
    </div>
  );
};

export default connect()(AddExpenseComponent);
