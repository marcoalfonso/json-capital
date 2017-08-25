import React, { Component } from 'react'

class Dashboard extends Component {
  constructor(props, { authData }) {
    super(props)
    authData = this.props
  }

  componentDidMount() {
    this.props.fetchData()
  }

  render() {
    const {
      balance,
      balanceJsn,
      handleSubmit,
    } = this.props;
    return(
      <div className="splash">
        <main className="container">
          <div className="pure-g">
            <div className="pure-u-1-1">
              <h1>Dashboard</h1>
              <p><strong>Congratulations {this.props.authData.name}!</strong> If you're seeing this page, you've logged in with your own smart contract successfully.</p>
              <h3>You have <span className="black">{balance} Metacoin</span></h3>
              <h3>You have <span className="black">{balanceJsn} JSN</span></h3>
            </div>
          </div>
        </main>
      </div>
    )
  }
}

export default Dashboard
