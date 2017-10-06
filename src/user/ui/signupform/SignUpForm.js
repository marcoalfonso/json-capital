import React, { Component } from 'react'

class SignUpForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      address: '',
      error: false
    }
  }

  onInputChange(event) {
    this.setState({ error: false })
    this.setState({ address: event.target.value })
  }

  handleSubmit(event) {
    event.preventDefault()

    if (this.state.address.length < 1)
    {
      return this.setState({ error: true })

    }

    this.props.onSignUpFormSubmit(this.state.address)
  }

  render() {
    return(
      <form className="pure-form" onSubmit={this.handleSubmit.bind(this)}>
        {this.state.error ?
          <div className="error">Incorrect details</div>
        : ''}
        <fieldset>
          <input id="address" type="text" value={this.state.address} onChange={this.onInputChange.bind(this)} placeholder="Ethereum Address" />
          <span className="pure-form-message">This is a required field.</span>
          <br />
          <button type="submit" className="json-button">Login</button>
        </fieldset>
      </form>
    )
  }
}

export default SignUpForm
