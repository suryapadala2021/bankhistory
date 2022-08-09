import './index.css'

const MoneyDetails = props => {
  const {state} = props
  const {balance, income, expenses} = state
  return (
    <>
      <div testid="balanceAmount" className="money-details-bal-box">
        <img
          className="money-details-box-image"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
        />
        <div>
          <p className="money-details-box-title">Your Balance</p>
          <p className="money-details-box-amount">Rs {balance}</p>
        </div>
      </div>
      <div testid="incomeAmount" className="money-details-income-box">
        <img
          className="money-details-box-image"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
        />
        <div>
          <p className="money-details-box-title">Your Income</p>
          <p className="money-details-box-amount">Rs {income}</p>
        </div>
      </div>
      <div testid="expensesAmount" className="money-details-expense-box">
        <img
          className="money-details-box-image"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="expensess"
        />
        <div>
          <p className="money-details-box-title">Your Expenses</p>
          <p className="money-details-box-amount">Rs {expenses}</p>
        </div>
      </div>
    </>
  )
}
export default MoneyDetails
