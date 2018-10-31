import * as React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { history } from './utils/RouterUtils';
import LoginPage from './pages/LoginPage';

class App extends React.Component<{}, {}> {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <Route exact path="/login" component={LoginPage} />
        </Switch>
      </Router>
    );
  }
}

export default App;
