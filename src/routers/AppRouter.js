import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import AddExpenseComponent from '../components/AddExpensePage';
import EditComponent from '../components/EditExpensePage';
import HelpComponent from '../components/HelpPage';
import NotFoundPage from '../components/404';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/" exact={true} component={ExpenseDashboardPage} />
          <Route path="/create" component={AddExpenseComponent} />
          <Route path="/edit" component={EditComponent} />
          <Route path="/help" component={HelpComponent} />
          <Route path="*" component={NotFoundPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
