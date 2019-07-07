import * as React from 'react';
import { connect } from 'react-redux';
import { Router, Route, Switch } from 'react-router-dom';
import { history } from 'utils/RouterUtils';
import LoginPage from 'pages/LoginPage';
import RegisterPage from 'pages/RegisterPage';
import HomePage from 'pages/HomePage';
import { initRouter } from 'modules/Menu/store/actions';
import { PATHS } from 'constants/RouteConstants';

interface IProps {
  initRouter(paths: string[]);
}

class App extends React.Component<IProps> {
  componentDidMount() {
    this.props.initRouter(PATHS);
  }

  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/register" component={RegisterPage} />
          <Route exact path="/home" component={HomePage} />
        </Switch>
      </Router>
    );
  }
}

export default connect(null, {
  initRouter
})(App);
