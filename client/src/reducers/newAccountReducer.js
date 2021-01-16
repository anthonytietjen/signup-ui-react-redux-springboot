import {
  SET_NEW_ACCOUNT_REQUEST_SUBMITTED,
  SET_NEW_ACCOUNT_RESPONSE_RECEIVED
} from "../actionTypes/actionTypes"

const initialState = {
  isSubmitting: false,
}

export const newAccountReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_NEW_ACCOUNT_REQUEST_SUBMITTED:
      return {
        ...state,
        isSubmitting: true
      }
    case SET_NEW_ACCOUNT_RESPONSE_RECEIVED:
      return {
        ...state,
        isSubmitting: false
      }
    default:
      return state
  }
}