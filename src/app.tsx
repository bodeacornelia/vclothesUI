import * as React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { history } from 'utils/RouterUtils';
import LoginPage from 'pages/LoginPage';
import RegisterPage from 'pages/RegisterPage';
import LandingLayout from './layout/LandingLayout';

const LandingPage = (props: any) => <div>Hello User</div>

class App extends React.Component<{}, {}> {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={LandingLayout} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/register" component={RegisterPage} />
          <Route exact path="/home" component={LandingPage} />
        </Switch>
      </Router>
    );
  }
}

export default App;
