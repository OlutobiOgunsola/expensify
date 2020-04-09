import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

// ADD_EXPENSE

const addExpense = ({
  description = '',
  note = '',
  amount = 0,
  createdAt = 0,
} = {}) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt,
  },
});

// REMOVE_EXPENSE

const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id,
});

// EDIT_EXPENSE

const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates,
});

// SET_TEXT_FILTER

const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text,
});

// SORT_BY_DATE

const sortByDate = () => ({
  type: 'SORT_BY_DATE',
  sortByDate,
});

// SORT_BY_AMOUNT

const sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT',
});

// SET_START_DATE'

const setStartDate = (startDate = 0) => ({
  type: 'SET_START_DATE',
  startDate,
});

// SET_END_DATE

const setEndDate = (endDate = 0) => ({
  type: 'SET_END_DATE',
  endDate,
});

// Get Visible Expenses

const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses
    .filter(expense => {
      const startDateMatch =
        typeof startDate !== 'number' || expense.createdAt >= startDate;
      const endDateMatch =
        typeof endDate !== 'number' || expense.createdAt <= endDate;
      const textMatch = expense.description
        .toLowerCase()
        .includes(text.toLowerCase());

      return startDateMatch && endDateMatch && textMatch;
    })
    .sort((a, b) => {
      if (sortBy === 'date') {
        return a.createdAt > b.createdAt ? 1 : -1;
      }
      return a.amount > b.amount ? 1 : -1;
    });
};

// Expenses Reducer

const ExpensesReducerInitialState = [];
const ExpensesReducer = (state = ExpensesReducerInitialState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [...state, action.expense];
    case 'REMOVE_EXPENSE':
      return state.filter(({ id }) => {
        return id !== action.id;
      });
    case 'EDIT_EXPENSE':
      return state.map(expense => {
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.updates,
          };
        }
      });
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
    case 'SET_TEXT_FILTER':
      return {
        ...state,
        text: action.text,
      };

    case 'SORT_BY_DATE':
      return {
        ...state,
        sortBy: 'date',
      };
    case 'SET_START_DATE':
      return {
        ...state,
        startDate: action.startDate,
      };
    case 'SET_END_DATE':
      return {
        ...state,
        endDate: action.endDate,
      };
    case 'SORT_BY_AMOUNT':
      return {
        ...state,
        sortBy: 'amount',
      };
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

store.subscribe(() => {
  const state = store.getState();
  const expenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(expenses);
});

const expenseOne = store.dispatch(
  addExpense({ description: 'Rent', amount: 321 }),
);
const expenseTwo = store.dispatch(
  addExpense({ description: 'Camry', amount: 321000 }),
);

// store.dispatch(removeExpense(expenseOne.expense));
// store.dispatch(editExpense(expenseOne.expense.id, { amount: 500 }));
// store.dispatch(setTextFilter('Rent'));
// store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(250));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(1250));

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
