import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './Home';

export default class App extends React.Component {
  public render() {
    return (
      <Router>
        <Route
          exact={true}
          path="*"
          component={Home}
        />
      </Router>
    );
  }
}
