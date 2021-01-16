import { useSelector } from "react-redux"
import { NewAccountView } from "./NewAccountView"

export const NewAccount = () => {
  const { isSubmitting } = useSelector(state => ({
    isSubmitting: state.newAccount.isSubmitting
  }))

  return (
    <NewAccountView
      isSubmitting={isSubmitting}
    />
  )
}