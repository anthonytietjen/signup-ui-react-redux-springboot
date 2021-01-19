import { DisqualificationView } from "./DisqualificationView"
import { useSelector } from 'react-redux'

export const Disqualification = () => {
  //TODO: Get this from a config file
  const phoneNumber = "1-555-555-5555";

  const { message } = useSelector(state => ({
    message: state.disqualification.message
  }))

  return (
    <DisqualificationView
      message={message}
      phoneNumber={phoneNumber}
    />
  )
}