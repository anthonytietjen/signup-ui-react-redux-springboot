import {
  SET_APPLICATION_RESPONSE_RECEIVED
} from "../actionTypes/actionTypes"

const initialState = {
  message: false,
}

export const disqualificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_APPLICATION_RESPONSE_RECEIVED:
      return {
        ...state,
        message: action.message
      }
    default:
      return state
  }
}