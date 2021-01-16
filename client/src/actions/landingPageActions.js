import {
  SET_APPLICATION_REQUEST_SUBMITTED,
  SET_APPLICATION_RESPONSE_RECEIVED
} from "../actionTypes/actionTypes"
import { submitApplicationApi } from "../api/api"

export const submitApplication = (data, history) => {
  return async (dispatch) => {
    dispatch({
      type: SET_APPLICATION_REQUEST_SUBMITTED
    })

    const response = await submitApplicationApi(data);

    if (response.status === 400) {
      alert("Bad request")
    } else {
      if (response.data.doesQualify) {
        history.push('/newaccount')
      } else {
        history.push('/disqualification')
      }
    }

    dispatch({
      type: SET_APPLICATION_RESPONSE_RECEIVED,
      message: response.data.message
    })
  }
}