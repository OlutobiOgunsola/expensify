import expensesReducer from '../../actions/reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
  const state = expensesReducer(undefined, {
    type: '@@INIT',
  });

  expect(state).toEqual([]);
});

test('should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id,
  };

  const state = expensesReducer(expenses, action);

  expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should NOT remove expense without id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '-1',
  };

  const state = expensesReducer(expenses, action);

  expect(state).toEqual([expenses[0], expenses[1], expenses[2]]);
});

test('should add expense', () => {
  const expense = {
    note: 'New',
    createdAt: 200000,
    description: 'New expense',
    id: '3',
    amount: 10900,
  };
  const action = {
    type: 'ADD_EXPENSE',
    expense,
  };

  const state = expensesReducer(expenses, action);

  expect(state).toEqual([expenses[0], expenses[1], expenses[2], expense]);
});

test('should edit expense if id is received', () => {
  const amount = 1200120;
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[1].id,
    update: {
      amount,
    },
  };
  const state = expensesReducer(expenses, action);
  expect(state[1].amount).toBe(amount);
});

test('should not edit expense if id not is received', () => {
  const amount = 1200120;
  const action = {
    type: 'EDIT_EXPENSE',
    id: 5,
    update: {
      amount,
    },
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});
