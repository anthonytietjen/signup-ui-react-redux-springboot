import './LandingPage.css'
import { useForm } from 'react-hook-form'

export const LandingPageView = (props) => {
  const { register, handleSubmit, errors } = useForm();
  const creditMin = 300;
  const creditMax = 800;

  return (<>
    <h1>Welcome</h1>

    <div className="page-intro-text">
      Please fill out the form below.
    </div>

    <div className="page-form landingpage-form">
      <form onSubmit={handleSubmit(props.handleSubmit)}>
        <div className="form-field">
          <label htmlFor="investment_amount">
            Investment Amount
          </label>
          <input
            type="number"
            name="investmentAmount"
            id="investment_amount"
            data-testid="investment_amount"
            ref={register({
              required: true
            })}
          />
          {errors.investmentAmount &&
            <div className="form-error">
              This field is required
            </div>
          }
        </div>

        <div className="form-field">
          <label htmlFor="investment_type">
            Investment Type (eg. Bond, Stocks, Real Estate etc.)
          </label>
          <input
            type="text"
            name="investmentType"
            id="investment_type"
            data-testid="investment_type"
            maxLength={25}
            ref={register({
              required: true
            })}
          />
          {errors.investmentType &&
            <div className="form-error">
              This field is required
            </div>
          }
        </div>

        <div className="form-field">
          <label htmlFor="total_net_worth">
            Total Net Worth
          </label>
          <input
            type="number"
            name="netWorth"
            id="total_net_worth"
            data-testid="total_net_worth"
            ref={register({
              required: true
            })}
          />
          {errors.netWorth &&
            <div className="form-error">
              This field is required
            </div>
          }
        </div>

        <div className="form-field">
          <label htmlFor="user_estimated_yearly_income">
            User Estimated Yearly Income
          </label>
          <input
            type="number"
            name="yearlyIncome"
            id="user_estimated_yearly_income"
            data-testid="user_estimated_yearly_income"
            ref={register({
              required: true
            })}
          />
          {errors.yearlyIncome &&
            <div className="form-error">
              This field is required
            </div>
          }
        </div>

        <div className="form-field">
          <label htmlFor="user_estimated_credit_score">
            User Estimated Credit Score
          </label>
          <input
            type="number"
            name="creditScore"
            id="user_estimated_credit_score"
            data-testid="user_estimated_credit_score"
            ref={register({
              min: creditMin,
              max: creditMax
            })}
          />
          {errors.creditScore &&
            <div className="form-error">
              {`Must be between ${creditMin} and ${creditMax}`}
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