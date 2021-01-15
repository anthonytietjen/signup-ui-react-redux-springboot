import { getMockApplicationResponse } from './mockresponses/getMockApplicationResponse'

export const submitApplication = (data) => {
  return new Promise((resolve, _reject) => {
    const response = getMockApplicationResponse(data);
    resolve(response)
  })
}