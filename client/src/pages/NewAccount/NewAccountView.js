import './NewAccount.css'

export const NewAccountView = (props) => (
  <>
    <h1>Congratulations</h1>

    <div className="page-intro-text">
      Based on the data you submitted, you qualify to create an account.
    </div>

    <div className="page-form new-account-form">
      <div className="form-field">
        <label htmlFor="username">
          User Name
        </label>
        <input
          type="text"
          id="username"
          data-id="username"
        />
      </div>

      <div className="form-field">
        <label htmlFor="password">
          Password
        </label>
        <input
          type="text"
          id="password"
          data-id="password"
        />
      </div>

      <div className="form-field">
        <label htmlFor="confirm_password">
          Confirm Password
        </label>
        <input
          type="text"
          id="confirm_password"
          data-id="confirm_password"
        />
      </div>

      <div className="form-field">
        <button
          type="Submit"
          data-testid="submit"
          className="btn-primary"
          disabled={props.isSubmitting}
        >
          Submit
        </button>
        {props.isSubmitting &&
          <span
            data-testid="loading"
            className="loading"
          >
            Loading...
          </span>
        }
      </div>
    </div>
  </>
)