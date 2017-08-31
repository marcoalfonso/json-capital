import React, { Component } from 'react'

class SignUpForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      password: ''
    }
  }

  onInputChange(event) {
    this.setState({ name: event.target.value })
  }

  onPasswordInputChange(event) {
    this.setState({ password: event.target.value })
  }

  handleSubmit(event) {
    event.preventDefault()

    if (this.state.name.length < 2)
    {
      return alert('Please fill in your name.')
    }

    if (this.state.password !== 'json-capital')
    {
      return alert('Please enter the correct password.')
    }

    this.props.onSignUpFormSubmit(this.state.name)
  }

  render() {
    return(
      <form className="pure-form" onSubmit={this.handleSubmit.bind(this)}>
        <fieldset>
          <input id="name" type="text" value={this.state.name} onChange={this.onInputChange.bind(this)} placeholder="Account" />
          <input id="password" type="text" value={this.state.password} onChange={this.onPasswordInputChange.bind(this)} placeholder="Password" />
          <span className="pure-form-message">This is a required field.</span>
          <br />
          <button type="submit" className="json-button">Login in</button>
        </fieldset>
      </form>
    )
  }
}

export default SignUpForm
