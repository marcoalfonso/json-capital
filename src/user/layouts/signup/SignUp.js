import React, { Component } from 'react'
import SignUpFormContainer from '../../ui/signupform/SignUpFormContainer'

class SignUp extends Component {
  render() {
    return(
      <div className="splash">
        <main>
          <div className="pure-g">
            <div className="pure-u-1-1">
              <h1>Login</h1>
              <p>Enter your account to login</p>
              <p>*Metamask connected to the main ethereum network required</p>
              <SignUpFormContainer />
            </div>
          </div>
        </main>
      </div>
    )
  }
}

export default SignUp
