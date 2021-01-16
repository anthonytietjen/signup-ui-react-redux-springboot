import {
  SET_APPLICATION_REQUEST_SUBMITTED,
  SET_APPLICATION_RESPONSE_RECEIVED
} from '../actionTypes/actionTypes'

const initialState = {
  isSubmitting: false,
}

export const landingPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_APPLICATION_REQUEST_SUBMITTED:
      return {
        ...state,
        isSubmitting: true
      }
    case SET_APPLICATION_RESPONSE_RECEIVED:
      return {
        ...state,
        isSubmitting: false
      }
    default:
      return state
  }
}