import moment from 'moment';

export default [
  {
    id: '1',
    description: 'Hello 1',
    note: '',
    amount: 195,
    createdAt: 0,
  },
  {
    id: '2',
    description: 'Hllo 2',
    note: 'Rental',
    amount: 1095,
    createdAt: moment(0)
      .subtract(4, 'days')
      .valueOf(),
  },
  {
    id: '3',
    description: 'Hello 3',
    note: '',
    amount: 19015,
    createdAt: moment(0)
      .add(4, 'days')
      .valueOf(),
  },
];
