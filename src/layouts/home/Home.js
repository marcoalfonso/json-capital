import React, { Component } from 'react'

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      formSent: false
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault()
    this.setState({formSent: true})
    fetch('/contact', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: this.input.value
      })
    })
    .then((response) => {
      return response.json()
    })
    .catch((error) => {
      console.error(error);
    });
  }

  render() {
    return(
      <div>
        <div className="splash-container">
            <div className="t-grid">
              <div className="t-grid__grid"></div>
            </div>
            <div className="splash">
                <h1 className="splash-head">The most exclusive blockchain hedge fund</h1>
                <p className="splash-subhead">
                    Professional Investors and Entrepreneurs driving innovation based on Blockchain technology.
                </p>
                <div className="section__footer">
                  <a data-scroll="" href="#email-section" className="section__anchor-link anchor-link">
                    <svg id="arrow-down" viewBox="0 0 21.825 21.825" width="100%" height="100%">
                      <path d="M16.791 13.254a1.112 1.112 0 0 1 1.587 0 1.14 1.14 0 0 1 0 1.587l-6.65 6.651a1.14 1.14 0 0 1-.809.333c-.317 0-.603-.127-.81-.333l-6.65-6.651c-.444-.444-.444-1.143 0-1.587s1.143-.444 1.587 0l4.746 4.762V1.111A1.116 1.116 0 0 1 10.918 0c.619 0 1.111.492 1.111 1.111v16.904l4.762-4.761z" fill="#c3c3c3"></path>
                    </svg>
                    <span>Learn more</span>
                  </a>
                </div>
            </div>
        </div>

        <div className="content-wrapper" id="email-section">

            <div className="ribbon l-box-lrg pure-g">

                <div className="pure-u-1 pure-u-md-1-2 pure-u-lg-3-5">

                    <h2 className="content-head content-head-ribbon">Request Information.</h2>
                    <p>
                      <strong>JSON CAPITAL</strong> has built an unrivaled network of entrepreneurs, advisors, and limited partners who are on the front lines of this fast moving sector of Fintech. The principals of the firm believe that Blockchain technology is a profound invention that offers a better, faster, cheaper way to move money and exchange assets without counterparty risk.
                    </p>
                </div>
                <div className="contact-form is-center pure-u-1 pure-u-md-1-2 pure-u-lg-2-5">
                    <form className="pure-form pure-form-stacked align-left" onSubmit={this.handleSubmit}>
                      {this.state.formSent ?
                        <div className="success-message" >Thank you. We have received your request.</div>
                      :
                        <div>
                          <label htmlFor="email">Your Email</label>
                          <input id="email" type="email" placeholder="example@example.com" ref={(input) => this.input = input}/>
                          <button type="submit" className="json-button">Request</button>
                        </div>
                      }
                    </form>

                </div>
            </div>

            <div className="footer l-box is-center">
                © JSON Capital.
            </div>

        </div>
      </div>
    )
  }
}

export default Home
