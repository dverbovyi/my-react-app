import {
  REQUEST_TOKEN,
  RECEIVE_TOKEN,
  INVALIDATE_TOKEN,
  SHOW_POPOVER,
  HIDE_POPOVER
} from '../consts/actions';

import { API } from '../api';

//actions
export const requestToken = () => {
  return {
    type: REQUEST_TOKEN
  }
}

export const receiveToken = (token) => {
  return {
    type: RECEIVE_TOKEN,
    token
  }
}

export const invalidateToken = (token) => {
  return {
    type: INVALIDATE_TOKEN,
    token
  }
}

export const showPopover = (text) => {
  return {
    type: SHOW_POPOVER,
    text
  }
}

export const hidePopover = () => {
  return {
    type: HIDE_POPOVER
  }
}

//actions creators
export function generateToken() {
  return dispatch => {
    dispatch(requestToken());

    API.generateToken()
      .then(result => 
        dispatch(receiveToken(result.token))
      )
  }
}

export function establishConnection(token) {
  return dispatch => {
    dispatch(showPopover('Attempting to connect'));

    API.connect(token)
      .then(result => {
        if (!result.connected) {
          dispatch(invalidateToken(token))
          dispatch(showPopover('Connection failed'));
        }

        dispatch(hidePopover());
      })
  }
}