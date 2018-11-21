import { set } from '../../../utils/store/actions';

export const setRoute = set('environment', 'route');
export const navigateTo = (route: any) => (dispatch: any) => {
  dispatch(setRoute(route));
};
