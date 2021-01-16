import './Disqualification.css'

export const DisqualificationView = (props) => (
  <>
    <h1>You Do Not Qualify</h1>
    <div className="page-intro-text">
      Unfortunately you do not qualify at this time. Please see reason below.
    </div>
    <div
      data-testid="message"
      className="page-form disqualification-reason"
    >
      {props.message}
    </div>
  </>
)