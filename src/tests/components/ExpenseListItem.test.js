import React from 'react';

import { shallow } from 'enzyme';
import Expenses from '../fixtures/expenses';
import ExpenseListItem from '../../components/ExpenseListItem';

test('should render ExpenseListItem correctly', () => {
  const wrapper = shallow(<ExpenseListItem {...Expenses} />);
  expect(wrapper).toMatchSnapshot();
});
