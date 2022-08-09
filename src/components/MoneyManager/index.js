import './index.css'
import {Component} from 'react'
import {v4} from 'uuid'
import MoneyDetails from '../MoneyDetails/index'
import TransactionItem from '../TransactionItem/index'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]
class MoneyManager extends Component {
  state = {
    title: '',
    amount: '',
    type: 'income',
    balance: 0,
    income: 0,
    expenses: 0,
    historyList: [],
  }

  changeTitle = event => {
    this.setState({title: event.target.value})
  }

  changeAmount = event => {
    this.setState({amount: event.target.value})
  }

  addItem = event => {
    const {title, amount, type} = this.state
    event.preventDefault()
    const newHistory = {
      id: v4(),
      title,
      amount,
      type,
    }
  }

  render() {
    const {historyList} = this.state
    return (
      <div className="container">
        <div className="responsive-container">
          <div className="person-details">
            <h1 className="name">Hi, Richard</h1>
            <p className="description">
              Welcome back to your{' '}
              <span className="money-manager">Money Manager</span>
            </p>
          </div>
          <div className="money-details-container">
            <MoneyDetails state={this.state} />
          </div>
          <div className="trans-history-container">
            <div className="add-transaction-container">
              <form onSubmit={this.addItem}>
                <h1 className="addTransaction-title">Add Transaction</h1>
                <label className="label" htmlFor="titleInput">
                  TITLE
                </label>
                <br />
                <input
                  onChange={this.changeTitle}
                  placeholder="Title"
                  className="input"
                  id="titleInput"
                  type="text"
                />
                <label className="label" htmlFor="amountInput">
                  Amount
                </label>
                <br />
                <input
                  onChange={this.changeAmount}
                  placeholder="Amount"
                  className="input"
                  id="amountInput"
                  type="text"
                />
                <label className="label" htmlFor="selectId">
                  TYPE
                </label>
                <select id="selectId" className="input">
                  <option
                    selected
                    optionId={transactionTypeOptions[0].optionId}
                  >
                    {transactionTypeOptions[0].displayText}
                  </option>
                  <option optionId={transactionTypeOptions[1].optionId}>
                    {transactionTypeOptions[1].displayText}
                  </option>
                </select>
                <button type="submit" className="add-btn">
                  Add
                </button>
              </form>
            </div>
            <div className="history-container">
              <h1 className="addTransaction-title">History</h1>
              <ul className="history-list">
                <li className="history-list-heading-item">
                  <span className="history-list-head">Title</span>
                  <span className="history-list-head">Amount</span>
                  <span className="history-list-head">Type</span>
                </li>
                <hr className="divider" />
                {historyList.map(item => (
                  <TransactionItem key={id} details={item} />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default MoneyManager
