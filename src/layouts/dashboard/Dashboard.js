import React, { Component } from 'react'

class Dashboard extends Component {
  constructor(props, { authData }) {
    super(props)
    authData = this.props
  }

  componentDidMount() {
    this.props.fetchData(this.props.web3.eth.accounts[1])
    this.props.fetchAllAmount(this.props.web3.eth.accounts[0])
    this.props.fetchFreeAmount(this.props.web3.eth.accounts[0])
  }

  render() {
    const {
      balanceJsn,
      allAmount,
      freeAmount
    } = this.props;
    return(
      <div className="splash">
        <main>
          <div className="pure-g">
            <div className="pure-u-1-1">
              <h1>Dashboard</h1>
              <p><strong>Congratulations {this.props.authData.name}!</strong> If you're seeing this page, you've logged in with your own smart contract successfully.</p>
              <h3>Total JSN in the network: {allAmount}</h3>
              <h3>Free JSN: {freeAmount}</h3>
              <h3>You have <span className="black">{balanceJsn} JSN</span></h3>
            </div>
          </div>
        </main>
      </div>
    )
  }
}

export default Dashboard
