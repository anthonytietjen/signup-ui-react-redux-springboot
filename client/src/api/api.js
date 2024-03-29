import { getMockApplicationResponse } from './mockresponses/getMockApplicationResponse'

export const submitApplicationApi = (data) => {
  return new Promise((resolve, _reject) => {
    // Simulate network delay
    setTimeout(() => {
      const response = getMockApplicationResponse(data);
      resolve(response)
    }, 1000)
  })
}