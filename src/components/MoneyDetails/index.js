// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {balance, expenses, income} = props

  return (
    <div className="money-details-container">
      <div className="money-details-card-green">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png "
          alt="balance"
          className="image"
        />
        <div>
          <p className="money-details-card-heading">Your Balance</p>
          <p testId="balanceAmount">Rs. {balance}</p>
        </div>
      </div>
      <div className="money-details-card-sky-blue">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png "
          alt="income"
          className="image"
        />
        <div>
          <p className="money-details-card-heading">Your Income</p>
          <p testId="incomeAmount">Rs. {income}</p>
        </div>
      </div>
      <div className="money-details-card-purple ">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png "
          alt="expenses"
          className="image"
        />
        <div>
          <p className="money-details-card-heading">Your Expenses</p>
          <p testId="expensesAmount">Rs. {expenses}</p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
