import React, { Component } from 'react'

class SignUpForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      address: '',
      error: false,
      errorMessage: ''
    }
  }

  onInputChange(event) {
    this.setState({ error: false })
    this.setState({ address: event.target.value })
  }

  handleSubmit(event) {
    event.preventDefault()
    /**
     * Checks if the given string is a checksummed address
     *
     * @method isChecksumAddress
     * @param {String} address the given HEX adress
     * @return {Boolean}
    */
    const isChecksumAddress = function (address) {
        // Check each case
        address = address.replace('0x','');
        var addressHash = this.props.web3.utils.sha3(address.toLowerCase());
        for (var i = 0; i < 40; i++ ) {
            // the nth letter should be uppercase if the nth digit of casemap is 1
            if ((parseInt(addressHash[i], 16) > 7 && address[i].toUpperCase() !== address[i]) || (parseInt(addressHash[i], 16) <= 7 && address[i].toLowerCase() !== address[i])) {
                return false;
            }
        }
        return true;
    }

    /**
     * Checks if the given string is an address
     *
     * @method isAddress
     * @param {String} address the given HEX adress
     * @return {Boolean}
    */
    const isAddress = function (address) {
        if (!/^(0x)?[0-9a-f]{40}$/i.test(address)) {
            // check if it has the basic requirements of an address
            return false;
        } else if (/^(0x)?[0-9a-f]{40}$/.test(address) || /^(0x)?[0-9A-F]{40}$/.test(address)) {
            // If it's all small caps or all all caps, return true
            return true;
        } else {
            // Otherwise check each case
            return isChecksumAddress(address);
        }
    }

    if (this.state.address.length < 1)
    {
      return this.setState({ error: true, errorMessage: 'The address has to be more than one character' })

    }

    if (!isAddress(this.state.address))
    {
      return this.setState({ error: true, errorMessage: 'The address has to be a valid Ethereum address' })

    }

    this.props.onSignUpFormSubmit(this.state.address)
  }

  render() {
    return(
      <form className="pure-form" onSubmit={this.handleSubmit.bind(this)}>
        {this.state.error ?
          <div className="error">{this.state.errorMessage}</div>
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
