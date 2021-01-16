import { DisqualificationView } from "./DisqualificationView"
import { useSelector } from 'react-redux'

export const Disqualification = () => {
  const { message } = useSelector(state => ({
    message: state.disqualification.message
  }))

  return (
    <DisqualificationView
      message={message}
    />
  )
}