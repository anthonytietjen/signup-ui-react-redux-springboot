import './LandingPage.css'

export const LandingPageView = () => (
  <>
    <h1>Welcome</h1>

    <div className="page-intro-text">
      Please fill out the form below.
    </div>

    <div className="page-form">
      <div className="form-field">
        <label for="investment_amount">
          Investment Amount
        </label>
        <input
          type="text"
          id="investment_amount"
          data-id="investment_amount"
        />
      </div>

      <div className="form-field">
        <label for="investment_type">
          Investment Type (eg. Bond, Stocks, Real Estate etc.)
        </label>
        <input
          type="text"
          id="investment_type"
          data-id="investment_type"
        />
      </div>

      <div className="form-field">
        <label for="total_net_worth">
          Total Net Worth
        </label>
        <input
          type="text"
          id="total_net_worth"
          data-id="total_net_worth"
        />
      </div>

      <div className="form-field">
        <label for="user_estimated_yearly_income">
          User Estimated Yearly Income
        </label>
        <input
          type="text"
          id="user_estimated_yearly_income"
          data-id="user_estimated_yearly_income"
        />
      </div>

      <div className="form-field">
        <label for="user_estimated_credit_score">
          User Estimated Credit Score
        </label>
        <input
          type="text"
          id="user_estimated_credit_score"
          data-id="user_estimated_credit_score"
        />
      </div>

      <div className="form-field">
        <button
          type="Submit"
          data-id="submit"
          className="btn-primary"
        >
          Submit
        </button>
      </div>
    </div>
  </>
)