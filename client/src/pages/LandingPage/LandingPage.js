import { submitApplication } from "../../api/api"
import { LandingPageView } from "./LandingPageView"
import { useHistory } from 'react-router-dom'

export const LandingPage = (props) => {
  const history = useHistory()

  const handleSubmit = async (data) => {
    const response = await submitApplication(data)
    if (response.status === 400) {
      alert("Bad request")
    } else {
      history.push('/newaccount')
    }
  }

  return (
    <LandingPageView
      handleSubmit={handleSubmit}
    />
  )
}