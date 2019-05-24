import { createBrowserHistory } from 'history';
import { compile } from 'path-to-regexp';

export const history = createBrowserHistory();

const compileOptions = (options) => Object.keys(options)
  .filter((key) => options[key] ? key : null)
  .map((key) => `${key}=${options[key]}`).join('&');

export const compileHash = ({path = '', keys = {}, options = {}, hash = ''}) => {

  const toPath = compile(path);
  const query = compileOptions(options);
  return `${toPath(keys)}${hash ? `#${hash}` : ''}${query === '' ? '' : `?${query}`}`;
};
