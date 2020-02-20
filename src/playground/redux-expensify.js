import { createStore, combineReducers } from 'redux';

// ADD_EXPENSE
// REMOVE_EXPENSE
// EDIT_EXPENSE
// SET_TEXT_FILTER
// SORT_BY_DATE
// SORT_BY_AMOUNT
// SET_START_DATE
// SET_END_DATE

// Expenses Reducer

const ExpensesReducerInitialState = [];
const ExpensesReducer = (state = ExpensesReducerInitialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

// Filters Reducer

const FiltersReducerInitialState = {
  text: '',
  sortBy: 'Date',
  startDate: undefined,
  endDate: undefined,
};
const FiltersReducer = (state = FiltersReducerInitialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

// Store creation

const store = createStore(
  combineReducers({
    expenses: ExpensesReducer,
    filters: FiltersReducer,
  }),
);

console.log(store.getState());

const demoState = {
  expenses: [
    {
      id: 'asdasd',
      description: 'January Rent',
      notes: 'This is a placeholder note',
      amount: 234.5,
      createdAt: 0,
    },
  ],
  filters: {
    text: 'rent',
    sortBy: 'amount', // date or amount
    startDate: undefined,
    endDate: undefined,
  },
};
