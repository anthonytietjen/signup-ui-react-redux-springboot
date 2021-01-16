import { useSelector } from "react-redux"
import { NewAccountView } from "./NewAccountView"

export const NewAccount = () => {
  const { isSubmitting } = useSelector(state => ({
    isSubmitting: state.newAccount.isSubmitting
  }))

  const handleSubmit = (data) => {
    console.log(data)
  }

  return (
    <NewAccountView
      isSubmitting={isSubmitting}
      handleSubmit={handleSubmit}
    />
  )
}