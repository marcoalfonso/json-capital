import React, { Component } from 'react'
import SignUpFormContainer from '../../ui/signupform/SignUpFormContainer'

class SignUp extends Component {
  render() {
    return(
      <div className="splash">
        <main className="container">
          <div className="pure-g">
            <div className="pure-u-1-1">
              <h1>Sign In</h1>
              <p>Enter your account to login</p>
              <SignUpFormContainer />
            </div>
          </div>
        </main>
      </div>
    )
  }
}

export default SignUp
