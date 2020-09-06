import React from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import ProtectedRoute from './ProtectedRoute';


export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <LoginPage />
        </Route>
        <ProtectedRoute path="/home" component={HomePage} />
        <Route path="/*" render={() => (<h1>404</h1>)} />
      </Switch>
    </Router>
  );
}
