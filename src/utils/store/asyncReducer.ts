import * as immutable from 'immutable';
import { camelCase } from 'lodash';
import * as constants from './constants';

const INITIAL_STATE = immutable.Map({});

const actionTypeMapping = {
  [constants.ACTION_FETCH]: constants.RESOURCE_TYPE_ITEMS,
  [constants.ACTION_GET]: constants.RESOURCE_TYPE_ITEM
};

export default (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  const actionTypeRegExp =
    new RegExp('@([A-Z0-9_]+)\/' +
      `(${constants.ACTION_FETCH} | ${constants.ACTION_GET})` +
      '\_([A-Z\_]+)_' +
      `(${constants.STATUS_START}|${constants.STATUS_SUCCESS}|${constants.STATUS_ERROR})`);

  const matchResult = type.match(actionTypeRegExp);

  if (matchResult) {
    const [
      match,
      namespace,
      actionType,
      identifier,
      status,
    ] = matchResult;

    const storePath = [camelCase(namespace), camelCase(identifier)];

    if (actionTypeMapping[actionType]) {
      storePath.push(actionTypeMapping[actionType]);
    }

    if (actionType === constants.ACTION_RESET) {
      return state.removeIn(storePath);
    }

    if (status === constants.STATUS_START) {
      return state.mergeIn(storePath, {
        [constants.PROPERTY_STATUS]: constants.ACTION_STATUS_RUNNING,
      });
    }

    if (status === constants.STATUS_SUCCESS) {
      return state.mergeIn(storePath, {
        [constants.PROPERTY_STATUS]: constants.ACTION_STATUS_DONE,
        [constants.PROPERTY_DATA]: payload,
        [constants.PROPERTY_ERROR]: undefined,
      });
    }

    if (status === constants.STATUS_ERROR) {
      return state.mergeIn(storePath, {
        [constants.PROPERTY_STATUS]: constants.ACTION_STATUS_FAILED,
        [constants.PROPERTY_DATA]: undefined,
        [constants.PROPERTY_ERROR]: payload,
      });
    }
  }
  return state;
}