import { set } from 'utils/store/actions';
import { history, compileHash, parseRoute } from 'utils/RouterUtils';
import Auth from 'utils/AuthenticationUtils';
import { HOME } from 'constants/RouteConstants'

export const setRoute = set('environment', 'route');

// routes
const pushState = (route) => {
  const fullPath = compileHash(route);
  history.push(fullPath);
}
export const navigateTo = (route, shouldPushState = true) => (dispatch) => {
  dispatch(setRoute(route));

  if (shouldPushState) {
    pushState(route);
  }
};

export const initRouter = (paths) => (dispatch) => {

  const path = location.pathname;
  const query = new URLSearchParams(location.search);
  const route = parseRoute(path, query);

  if (query.has('token')) {
    Auth.setToken(query.get('token'));
    const routeAfterLogin = {
      path: `${HOME}`,
    };

    return dispatch(navigateTo(routeAfterLogin, true))
  }
  return dispatch(navigateTo(route, false));
};

