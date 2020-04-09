import { createStore, combineReducers } from 'redux';
import ExpensesReducer from '../actions/reducers/expenses';
import FiltersReducer from '../actions/reducers/filters';

export default () => {
  // Store creation

  const store = createStore(
    combineReducers({
      expenses: ExpensesReducer,
      filters: FiltersReducer,
    }),
  );

  return store;
};
