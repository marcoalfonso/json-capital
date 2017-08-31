import React, { Component } from 'react'

class SignUpForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      password: '',
      error: false
    }
  }

  onInputChange(event) {
    this.setState({ error: false })
    this.setState({ name: event.target.value })
  }

  onPasswordInputChange(event) {
    this.setState({ error: false })
    this.setState({ password: event.target.value })
  }

  handleSubmit(event) {
    event.preventDefault()

    if (this.state.name.length < 2)
    {
      return this.setState({ error: true })

    }

    if (this.state.password !== 'json-capital')
    {
      return this.setState({ error: true })
    }

    this.props.onSignUpFormSubmit(this.state.name)
  }

  render() {
    return(
      <form className="pure-form" onSubmit={this.handleSubmit.bind(this)}>
        {this.state.error ?
          <div className="error">Incorrect details</div>
        : ''}
        <fieldset>
          <input id="name" type="text" value={this.state.name} onChange={this.onInputChange.bind(this)} placeholder="Account" />
          <input id="password" type="password" value={this.state.password} onChange={this.onPasswordInputChange.bind(this)} placeholder="Password" />
          <span className="pure-form-message">These are required fields.</span>
          <br />
          <button type="submit" className="json-button">Login</button>
        </fieldset>
      </form>
    )
  }
}

export default SignUpForm
