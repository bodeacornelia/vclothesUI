import { createBrowserHistory } from 'history';
import { compile } from 'path-to-regexp';

export const history = createBrowserHistory();

const compileOptions = (options) => Object.keys(options)
  .filter((key) => options[key] ? key : null)
  .map((key) => `${key}=${options[key]}`).join('&');

export const compileHash = ({ path = '', keys = {}, options = {}, hash = '' }) => {

  const toPath = compile(path);
  const query = compileOptions(options);
  return `${toPath(keys)}${hash ? `#${hash}` : ''}${query === '' ? '' : `?${query}`}`;
};

const parseRouteOptions = (optionsString) => {
  return optionsString
    .split('&')
    .map((str) => str.split('='))
    .reduce((obj, keyValuePair) => ({
      ...obj,
      [keyValuePair[0]]: keyValuePair[1]
    }), {});
}

export const parseRoute = (path, query) => {
  const optionsString = query.toString();

  const options = optionsString ? parseRouteOptions(optionsString) : {};
  return { path, options };
};
