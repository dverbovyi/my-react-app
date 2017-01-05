import {
  REQUEST_TOKEN,
  RECEIVE_TOKEN,
  INVALIDATE_TOKEN
} from '../consts/actions';

export function session(state = {}, action) {
  switch(action.type) {
    case REQUEST_TOKEN:
      return Object.assign({}, state, {
        isFetching: true
      });
    case RECEIVE_TOKEN:
      return Object.assign({}, state, {
        isFetching: false,
        token: action.token,
      });
    case INVALIDATE_TOKEN:
      return Object.assign({}, state, {
        isFetching: true,
        token: null
      });
    default:
      return state;
  }
}