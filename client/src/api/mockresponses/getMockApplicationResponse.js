import { doesApplicationQualify } from '../../utils/doesApplicationQualify'

export const getMockApplicationResponse = (data) => {
  const qualificationCode = doesApplicationQualify(data)

  // If investment amount was over 9,000,000, return Bad Request
  const status = (qualificationCode === 4) ? 400 : 200;
  const doesQualify = qualificationCode === 0;
  const message = (qualificationCode === 0) ? "" : "Lorem ipsum dolor sit amet"

  return {
    status,
    data: {
      doesQualify,
      message
    }
  }
}