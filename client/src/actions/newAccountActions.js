import {
  SET_NEW_ACCOUNT_REQUEST_SUBMITTED,
  SET_NEW_ACCOUNT_RESPONSE_RECEIVED
} from "../actionTypes/actionTypes"

export const submitNewAccount = (data) => {
  return (dispatch) => {
    dispatch({
      type: SET_NEW_ACCOUNT_REQUEST_SUBMITTED
    })

    dispatch({
      type: SET_NEW_ACCOUNT_RESPONSE_RECEIVED
    })
  }
}