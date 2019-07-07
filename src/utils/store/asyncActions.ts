import { createAction } from 'redux-actions';
import * as constants from './constants';

const actionName = (namespace, identifier, method, status) =>
  `@${namespace}/${method}_${identifier}_${status}`;

const genericAction = (namespace, identifier, method, status) =>
  createAction(actionName(namespace, identifier, method, status));

const actionStatusFunction = (status) => (namespace, identifier, method) =>
  genericAction(namespace, identifier, method, status);

const asyncRequest = (method, namespace, identifier, func) => {
  const [
    requestStart,
    requestSuccess,
    requestError
  ] = [
    actionStatusFunction(constants.STATUS_START),
    actionStatusFunction(constants.STATUS_SUCCESS),
    actionStatusFunction(constants.STATUS_ERROR),
  ].map((fn) => fn(namespace, identifier, method));

  return (...params) => (dispatch) => {
    dispatch(requestStart());

    return func(...params).then((response) => {
      dispatch(requestSuccess(response));
      return response;
    }).catch((err) => {
      dispatch(requestError(err));
      return Promise.reject(err);
    });
  };
};

const createAsyncRequestByActionType = (actionType) =>
  (namespace, identifier, func) =>
    asyncRequest(actionType, namespace, identifier, func);


export const getList = createAsyncRequestByActionType(constants.ACTION_FETCH);
export const getDetails = createAsyncRequestByActionType(constants.ACTION_GET);