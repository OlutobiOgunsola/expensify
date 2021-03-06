import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>Expensify</h1>
      <NavLink exact={true} to="/" activeClassName="is-active">
        Dashboard
      </NavLink>
      <NavLink to="/create" activeClassName="is-active">
        Create expense
      </NavLink>
      <NavLink to="/edit" activeClassName="is-active">
        Edit expense
      </NavLink>
      <NavLink to="/help" activeClassName="is-active">
        Help
      </NavLink>
    </header>
  );
};

export default Header;
