import './NewAccount.css'
import { useForm } from 'react-hook-form'

const minPasswordLength = 8;
const passwordFormatMessage = "Must be at least 8 characters and contain a number or special character";

export const NewAccountView = (props) => {
  const { register, handleSubmit, watch, errors } = useForm();

  // http://emailregex.com/
  const emailRegEx = /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/

  // TODO: Apply the real regex
  const passwordRegEx = /^[A-za-z]+$/i

  const showPasswordMatchError = () => {
    const password = watch("password")
    const passwordConfirm = watch("passwordConfirm")
    const showError = password && passwordConfirm && password !== passwordConfirm;
    return showError;
  }

  return (<>
    <h1>Congratulations</h1>

    <div className="page-intro-text">
      Based on the data you submitted, you qualify to create an account.
    </div>

    <div className="page-form new-account-form">
      <form onSubmit={handleSubmit(props.handleSubmit)}>
        <div className="form-field">
          <label htmlFor="username">
            Email (This will be your username)
          </label>
          <input
            type="text"
            name="username"
            id="username"
            data-id="username"
            maxLength={50}
            ref={register({
              required: true,
              pattern: emailRegEx
            })}
          />
          {errors.username &&
            <div className="form-error">
              Invalid format
            </div>
          }
        </div>

        <div className="form-field">
          <label htmlFor="password">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            data-id="password"
            ref={register({
              required: true,
              minLength: minPasswordLength,
              pattern: passwordRegEx
            })}
          />
          {errors.password &&
            <div className="form-error">
              {passwordFormatMessage}
            </div>
          }
        </div>

        <div className="form-field">
          <label htmlFor="confirm_password">
            Confirm Password
          </label>
          <input
            type="password"
            name="passwordConfirm"
            id="confirm_password"
            data-id="confirm_password"
            ref={register({
              required: true,
              minLength: minPasswordLength,
              pattern: passwordRegEx
            })}
          />
          {errors.passwordConfirm &&
            <div className="form-error">
              {passwordFormatMessage}
            </div>
          }
          {(!errors.passwordConfirm && showPasswordMatchError()) &&
            <div className="form-error">
              Passwords don't match
            </div>
          }
        </div>

        <div className="form-field">
          <input
            type="submit"
            data-testid="submit"
            className="btn-primary"
            disabled={props.isSubmitting}
            value="Submit"
          />
          {props.isSubmitting &&
            <span
              data-testid="loading"
              className="loading"
            >
              Loading...
            </span>
          }
        </div>
      </form>
    </div>
  </>)
}