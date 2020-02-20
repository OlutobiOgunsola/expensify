import React from 'react';
import Header from './Header';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div>
      <Header />
      404!!
      <Link to="/">Go home</Link>
    </div>
  );
};

export default NotFoundPage;
