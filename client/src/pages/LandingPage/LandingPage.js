import { LandingPageView } from "./LandingPageView"
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { submitApplication } from "../../actions/landingPageActions"

export const LandingPage = (props) => {
  const history = useHistory()
  const dispatch = useDispatch()
  const { isSubmitting } = useSelector(state => ({
    isSubmitting: state.landingPage.isSubmitting
  }))

  const handleSubmit = async (data) => {
    dispatch(submitApplication(data, history))
  }

  return (
    <LandingPageView
      isSubmitting={isSubmitting}
      handleSubmit={handleSubmit}
    />
  )
}