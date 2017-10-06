import React, { Component } from 'react'

class Dashboard extends Component {
  constructor(props, { authData }) {
    super(props)
    this.state = {
      transferAmmount: '',
      accountToTransfer: '',
      transferComplete: false
    }
    authData = this.props
  }

  onAccountInputChange(event) {
    this.setState({ accountToTransfer: event.target.value })
  }

  onAmmountInputChange(event) {
    this.setState({ transferAmmount: event.target.value })
  }

  componentDidMount() {
    this.props.fetchData(this.props.account)
    this.props.fetchAllAmount(this.props.account)
    this.props.fetchFreeAmount(this.props.account)
  }

   handleSubmit(event) {
    event.preventDefault()

    this.props.onDashboardTransferSubmit(this.props.account, this.state.accountToTransfer, this.state.transferAmmount)
    this.setState({ transferComplete: true })
    this.setState({ transferAmmount: '' })
    this.setState({ accountToTransfer: '' })
  }

  render() {
    const {
      balanceJsn,
      allAmount,
      freeAmount,
      account
    } = this.props;
    return(
      <div className="splash">
        <main>
          <div className="pure-g">
            <div className="pure-u-1-1">
              <h1>Dashboard</h1>
              <p>Welcome to JSON Capital! Your address is: <strong>{account}</strong></p>
              <h3>Total JSN in the network: {allAmount}</h3>
              <h3>Free JSN: {freeAmount}</h3>
              <h3>You have <span className="black">{balanceJsn} JSN</span></h3>
              {this.state.transferComplete &&
                <div className="error">Transfer was successful</div>
              }
              <form className="pure-form" onSubmit={this.handleSubmit.bind(this)}>
                <fieldset>
                  <input id="accountToTransfer" type="text" value={this.state.accountToTransfer} onChange={this.onAccountInputChange.bind(this)} placeholder="Account to transfer to" />
                  <input id="transferAmmount" type="text" value={this.state.transferAmmount} onChange={this.onAmmountInputChange.bind(this)} placeholder="Transfer Ammount" />
                  <button type="submit" className="json-button">Transfer JSN</button>
                </fieldset>
              </form>
            </div>
          </div>
        </main>
      </div>
    )
  }
}

export default Dashboard
