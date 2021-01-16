import './NewAccount.css'
import { useForm } from 'react-hook-form'

const minPasswordLength = 8;
const passwordFormatMessage = "Must be at least 8 characters and contain a number or special character";

// http://emailregex.com/
const emailRegEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

// https://stackoverflow.com/a/24644344
const passwordRegEx = /^(?=.*\d).{8,}$/

export const NewAccountView = (props) => {
  const { register, handleSubmit, watch, errors } = useForm();

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
            data-testid="username"
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
            data-testid="password"
            ref={register({
              required: true,
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
            data-testid="confirm_password"
            ref={register({
              required: true,
              pattern: passwordRegEx
            })}
          />
          {errors.passwordConfirm &&
            <div className="form-error">
              {passwordFormatMessage}
            </div>
          }
          {(!errors.passwordConfirm && showPasswordMatchError()) &&
            <div
              data-testid="error_passwords_dont_match"
              className="form-error"
            >
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