import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import AppRouter from './routers/AppRouter.js';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

const store = configureStore();

store.dispatch(addExpense({ description: 'Water Bills', amount: 500 }));
store.dispatch(
  addExpense({ description: 'Gas Bills', amount: 100, createdAt: 222912 }),
);
store.dispatch(
  addExpense({ description: 'Rent Bills', amount: 682, createdAt: 5339 }),
);

ReactDOM.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,
  document.getElementById('app'),
);
